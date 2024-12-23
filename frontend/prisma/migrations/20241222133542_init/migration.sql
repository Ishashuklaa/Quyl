-- CreateTable
CREATE TABLE "StudentData" (
    "id" SERIAL NOT NULL,
    "Student Name" TEXT NOT NULL,
    "Cohort" TEXT,
    "Courses" TEXT,
    "Date Joined" TIMESTAMP(3) NOT NULL,
    "Last Login" TIMESTAMP(3),
    "Status" BOOLEAN NOT NULL,

    CONSTRAINT "StudentData_pkey" PRIMARY KEY ("id")
);
