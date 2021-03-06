# Migration `20200807042247-init`

This migration has been generated by Lucas William at 8/7/2020, 1:22:47 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."User" (
"id" SERIAL,
"name" text  NOT NULL ,
"avatar" text  NOT NULL ,
"whatsapp" text  NOT NULL ,
"bio" text  NOT NULL ,
PRIMARY KEY ("id"))

CREATE TABLE "public"."Classes" (
"id" SERIAL,
"subject" text  NOT NULL ,
"cost" Decimal(65,30)  NOT NULL ,
"userId" integer  NOT NULL ,
PRIMARY KEY ("id"))

CREATE TABLE "public"."ClassSchedules" (
"id" SERIAL,
"week_day" integer  NOT NULL ,
"from" integer  NOT NULL ,
"to" integer  NOT NULL ,
"classId" integer  NOT NULL ,
PRIMARY KEY ("id"))

CREATE TABLE "public"."Connections" (
"id" SERIAL,
"userId" integer  NOT NULL ,
"createdAt" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY ("id"))

ALTER TABLE "public"."Classes" ADD FOREIGN KEY ("userId")REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "public"."ClassSchedules" ADD FOREIGN KEY ("classId")REFERENCES "public"."Classes"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "public"."Connections" ADD FOREIGN KEY ("userId")REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200807042247-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,43 @@
+// This is your Prisma schema file,
+// learn more about it in the docs: https://pris.ly/d/prisma-schema
+
+datasource db {
+  provider = "postgresql"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model User {
+  id       Int    @id @default(autoincrement())
+  name     String
+  avatar   String
+  whatsapp String
+  bio      String
+}
+
+model Classes {
+  id      Int    @id @default(autoincrement())
+  subject String
+  cost    Float
+  user    User   @relation(fields: [userId], references: [id])
+  userId  Int
+}
+
+model ClassSchedules {
+  id       Int  @id @default(autoincrement())
+  week_day Int
+  from     Int
+  to       Int
+  class     Classes @relation(fields: [classId], references: [id])
+  classId   Int
+}
+
+model Connections {
+  id Int @id @default(autoincrement())
+  user    User   @relation(fields: [userId], references: [id])
+  userId  Int
+  createdAt DateTime @default(now())
+}
```


