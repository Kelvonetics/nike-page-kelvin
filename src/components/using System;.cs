using System;

namespace CompanyApp
{
    public class Employee
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public double Salary { get; set; }

        // Constructor for Employee class
        public Employee(int id, string name, double salary)
        {
            Id = id;
            Name = name;
            Salary = salary;
        }

        // Method to display employee details
        public virtual void DisplayDetails()
        {
            Console.WriteLine($"ID: {Id}, Name: {Name}, Salary: {Salary}");
        }
    }


    // Sales class that inherits from Employee
    public class Sales : Employee
    {
        // Property specific to Sales class
        public double SalesTarget { get; set; }
        public double ActualSales { get; set; }

        // Constructor for Sales class
        public Sales(int id, string name, double salary, double salesTarget, double actualSales)
            : base(id, name, salary)
        {
            SalesTarget = salesTarget;
            ActualSales = actualSales;
        }

        // Override DisplayDetails to include Sales-specific details
        public override void DisplayDetails()
        {
            base.DisplayDetails();
            Console.WriteLine($"Sales Target: {SalesTarget}, Actual Sales: {ActualSales}");
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            // Creating instances of Account and Sales which inherit from Employee
            Sales salesEmployee = new Sales(102, "Jane Smith", 60000, 500000, 450000);

            // Displaying details of Sales employees
            Console.WriteLine("\n Sales Employee Details:");
            salesEmployee.DisplayDetails();
        }
    }
}
