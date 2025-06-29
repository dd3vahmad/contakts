"use client";

import { useEffect, useState } from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus, Save } from "lucide-react";
import { IContact } from "@/constants/interface";
import { useAuth } from "@/providers/auth";

const Home = () => {
  const auth = useAuth();
  const user = auth?.currentUser;
  const [contacts, setContacts] = useState<IContact[]>([]);
  const [newContact, setNewContact] = useState({ name: "", email: "" });
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editData, setEditData] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    fetch("/api/contacts")
      .then((res) => res.json())
      .then((data) => setContacts(data));
  }, []);

  const handleAdd = async () => {
    const res = await fetch("/api/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newContact),
    });
    const created = await res.json();
    setContacts((prev) => [...prev, created]);
    setNewContact({ name: "", email: "" });
  };

  const handleEdit = (id: string) => {
    const contact = contacts.find((c) => c.id === id);
    if (contact) {
      setEditData({ name: contact.name, email: contact.email });
      setEditingId(id);
    }
  };

  const handleSave = async (id: string) => {
    const res = await fetch(`/api/contacts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editData),
    });
    const updated = await res.json();
    setContacts((prev) => prev.map((c) => (c.id === id ? updated : c)));
    setEditingId(null);
    setEditData({});
  };

  const columns: ColumnDef<IContact>[] = [
    {
      accessorKey: "name",
      header: "Name",
      cell: ({ row }: { row: any }) =>
        editingId === row.original.id ? (
          <Input
            value={editData.name || ""}
            onChange={(e) => setEditData({ ...editData, name: e.target.value })}
          />
        ) : (
          row.original.name
        ),
    },
    {
      accessorKey: "email",
      header: "Email",
      cell: ({ row }: { row: any }) =>
        editingId === row.original.id ? (
          <Input
            value={editData.email || ""}
            onChange={(e) =>
              setEditData({ ...editData, email: e.target.value })
            }
          />
        ) : (
          row.original.email
        ),
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }: { row: any }) =>
        editingId === row.original.id ? (
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleSave(row.original.id)}
          >
            <Save className="h-4 w-4 mr-1" /> Save
          </Button>
        ) : (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleEdit(row.original.id)}
          >
            Edit
          </Button>
        ),
    },
  ];

  const table = useReactTable({
    data: contacts,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="w-full gap-y-4 px-4 min-h-screen flex flex-col items-center justify-center">
      <h2>Welcome {user?.user_metadata.full_name || "back!"}</h2>
      <div className="flex gap-2 w-full">
        <Input
          placeholder="Name"
          value={newContact.name}
          onChange={(e) =>
            setNewContact({ ...newContact, name: e.target.value })
          }
        />
        <Input
          placeholder="Email"
          value={newContact.email}
          onChange={(e) =>
            setNewContact({ ...newContact, email: e.target.value })
          }
        />
        <Button onClick={handleAdd} className="shrink-0">
          <Plus className="h-4 w-4 mr-1" /> Add
        </Button>
      </div>

      <div className="rounded-md border w-full">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup: any) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header: any) => (
                  <TableHead key={header.id}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row: any) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell: any) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="text-center h-24"
                >
                  No contacts found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Home;
