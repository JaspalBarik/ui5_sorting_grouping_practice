sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("sortinggroupingpractice.controller.View1", {
        onInit: function() {
            const oEmployeeModel = new JSONModel({
                Employees: [
                    {
                        employeeId: 101,
                        employeeName: "Jaspal Barik",
                        designation: "SAPUI5 Developer",
                        department: "IT"
                    },
                    {
                        employeeId: 102,
                        employeeName: "Sarah Sharma",
                        designation: "Software Tester",
                        department: "HR"
                    },
                    {
                        employeeId: 103,
                        employeeName: "Satya Das",
                        designation: "Business Analyst",
                        department: "IT"
                    },
                    {
                        employeeId: 104,
                        employeeName: "Priyanka Roy",
                        designation: "HR Executive",
                        department: "HR"
                    },
                    {
                        employeeId: 105,
                        employeeName: "Subham Patel",
                        designation: "Project Manager",
                        department: "Management"
                    },
                    {
                        employeeId: 106,
                        employeeName: "Rahul Mishra",
                        designation: "SAP Developer",
                        department: "IT"
                    }
                ]
            });

            this.getView().setModel(oEmployeeModel, "employee");
        }
    });
});