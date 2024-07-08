import { sql } from "drizzle-orm";
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

export const appointments = sqliteTable("appointments", {
  id: integer("id").primaryKey(),
  created_at: text("created_at")
    .notNull()
    .default(sql`(current_timestamp)`),
  name: text("name").notNull(),
  email: text("email"),
  phone: text("phone"),
  date: text("date").notNull(),
  time: text("time").notNull(),
  megj: text("message"),
});

export type SelectAppointment = typeof appointments.$inferSelect;
export type InsertAppointment = typeof appointments.$inferInsert;
