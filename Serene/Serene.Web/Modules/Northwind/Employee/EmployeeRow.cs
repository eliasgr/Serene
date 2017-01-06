﻿
namespace Serene.Northwind.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Northwind"), DisplayName("Employees"), InstanceName("Employee"), TwoLevelCached]
    [ReadPermission(PermissionKeys.General)]
    [ModifyPermission(PermissionKeys.General)]
    [LookupScript("Northwind.Employee")]
    public sealed class EmployeeRow : Row, IIdRow, INameRow
    {
        [DisplayName("Employee Id"), Identity]
        public Int32? EmployeeID
        {
            get { return Fields.EmployeeID[this]; }
            set { Fields.EmployeeID[this] = value; }
        }

        [DisplayName("Last Name"), Size(20), NotNull]
        public String LastName
        {
            get { return Fields.LastName[this]; }
            set { Fields.LastName[this] = value; }
        }

        [DisplayName("First Name"), Size(10), NotNull]
        public String FirstName
        {
            get { return Fields.FirstName[this]; }
            set { Fields.FirstName[this] = value; }
        }

        [DisplayName("FullName"), Expression("CONCAT(T0.[FirstName], CONCAT(' ', T0.[LastName]))"), QuickSearch]
        public String FullName
        {
            get { return Fields.FullName[this]; }
            set { Fields.FullName[this] = value; }
        }

        [DisplayName("Gender"), Expression("(CASE WHEN T0.[TitleOfCourtesy] LIKE '%s%' THEN 2 WHEN T0.[TitleOfCourtesy] LIKE '%Mr%' THEN 1 END)")]
        public Gender? Gender
        {
            get { return (Gender?)Fields.Gender[this]; }
            set { Fields.Gender[this] = (Int32?)value; }
        } 

        [DisplayName("Title"), Size(30)]
        public String Title
        {
            get { return Fields.Title[this]; }
            set { Fields.Title[this] = value; }
        }

        [DisplayName("Title Of Courtesy"), Size(25)]
        public String TitleOfCourtesy
        {
            get { return Fields.TitleOfCourtesy[this]; }
            set { Fields.TitleOfCourtesy[this] = value; }
        }

        [DisplayName("Birth Date")]
        public DateTime? BirthDate
        {
            get { return Fields.BirthDate[this]; }
            set { Fields.BirthDate[this] = value; }
        }

        [DisplayName("Hire Date")]
        public DateTime? HireDate
        {
            get { return Fields.HireDate[this]; }
            set { Fields.HireDate[this] = value; }
        }

        [DisplayName("Address"), Size(60)]
        public String Address
        {
            get { return Fields.Address[this]; }
            set { Fields.Address[this] = value; }
        }

        [DisplayName("City"), Size(15)]
        public String City
        {
            get { return Fields.City[this]; }
            set { Fields.City[this] = value; }
        }

        [DisplayName("Region"), Size(15)]
        public String Region
        {
            get { return Fields.Region[this]; }
            set { Fields.Region[this] = value; }
        }

        [DisplayName("Postal Code"), Size(10)]
        public String PostalCode
        {
            get { return Fields.PostalCode[this]; }
            set { Fields.PostalCode[this] = value; }
        }

        [DisplayName("Country"), Size(15)]
        public String Country
        {
            get { return Fields.Country[this]; }
            set { Fields.Country[this] = value; }
        }

        [DisplayName("Home Phone"), Size(24)]
        public String HomePhone
        {
            get { return Fields.HomePhone[this]; }
            set { Fields.HomePhone[this] = value; }
        }

        [DisplayName("Extension"), Size(4)]
        public String Extension
        {
            get { return Fields.Extension[this]; }
            set { Fields.Extension[this] = value; }
        }

        [DisplayName("Photo")]
        public Stream Photo
        {
            get { return Fields.Photo[this]; }
            set { Fields.Photo[this] = value; }
        }

        [DisplayName("Notes")]
        public String Notes
        {
            get { return Fields.Notes[this]; }
            set { Fields.Notes[this] = value; }
        }

        [DisplayName("Reports To"), ForeignKey("Employees", "EmployeeID"), LeftJoin("jReportsTo")]
        public Int32? ReportsTo
        {
            get { return Fields.ReportsTo[this]; }
            set { Fields.ReportsTo[this] = value; }
        }

        [DisplayName("Photo Path"), Size(255)]
        public String PhotoPath
        {
            get { return Fields.PhotoPath[this]; }
            set { Fields.PhotoPath[this] = value; }
        }

        [DisplayName("Reports To Last Name"), Expression("jReportsTo.[LastName]")]
        public String ReportsToLastName
        {
            get { return Fields.ReportsToLastName[this]; }
            set { Fields.ReportsToLastName[this] = value; }
        }

        [DisplayName("Reports To First Name"), Expression("jReportsTo.[FirstName]")]
        public String ReportsToFirstName
        {
            get { return Fields.ReportsToFirstName[this]; }
            set { Fields.ReportsToFirstName[this] = value; }
        }

        [DisplayName("Reports To"), Expression("CONCAT(jReportsTo.[FirstName], CONCAT(' ', jReportsTo.[LastName]))")]
        public String ReportsToFullName
        {
            get { return Fields.ReportsToFullName[this]; }
            set { Fields.ReportsToFullName[this] = value; }
        }

        [DisplayName("Reports To Title"), Expression("jReportsTo.Title")]
        public String ReportsToTitle
        {
            get { return Fields.ReportsToTitle[this]; }
            set { Fields.ReportsToTitle[this] = value; }
        }

        [DisplayName("Reports To Title Of Courtesy"), Expression("jReportsTo.[TitleOfCourtesy]")]
        public String ReportsToTitleOfCourtesy
        {
            get { return Fields.ReportsToTitleOfCourtesy[this]; }
            set { Fields.ReportsToTitleOfCourtesy[this] = value; }
        }

        [DisplayName("Reports To Birth Date"), Expression("jReportsTo.[BirthDate]")]
        public DateTime? ReportsToBirthDate
        {
            get { return Fields.ReportsToBirthDate[this]; }
            set { Fields.ReportsToBirthDate[this] = value; }
        }

        [DisplayName("Reports To Hire Date"), Expression("jReportsTo.[HireDate]")]
        public DateTime? ReportsToHireDate
        {
            get { return Fields.ReportsToHireDate[this]; }
            set { Fields.ReportsToHireDate[this] = value; }
        }

        [DisplayName("Reports To Address"), Expression("jReportsTo.[Address]")]
        public String ReportsToAddress
        {
            get { return Fields.ReportsToAddress[this]; }
            set { Fields.ReportsToAddress[this] = value; }
        }

        [DisplayName("Reports To City"), Expression("jReportsTo.[City]")]
        public String ReportsToCity
        {
            get { return Fields.ReportsToCity[this]; }
            set { Fields.ReportsToCity[this] = value; }
        }

        [DisplayName("Reports To Region"), Expression("jReportsTo.[Region]")]
        public String ReportsToRegion
        {
            get { return Fields.ReportsToRegion[this]; }
            set { Fields.ReportsToRegion[this] = value; }
        }

        [DisplayName("Reports To Postal Code"), Expression("jReportsTo.[PostalCode]")]
        public String ReportsToPostalCode
        {
            get { return Fields.ReportsToPostalCode[this]; }
            set { Fields.ReportsToPostalCode[this] = value; }
        }

        [DisplayName("Reports To Country"), Expression("jReportsTo.[Country]")]
        public String ReportsToCountry
        {
            get { return Fields.ReportsToCountry[this]; }
            set { Fields.ReportsToCountry[this] = value; }
        }

        [DisplayName("Reports To Home Phone"), Expression("jReportsTo.[HomePhone]")]
        public String ReportsToHomePhone
        {
            get { return Fields.ReportsToHomePhone[this]; }
            set { Fields.ReportsToHomePhone[this] = value; }
        }

        [DisplayName("Reports To Extension"), Expression("jReportsTo.[Extension]")]
        public String ReportsToExtension
        {
            get { return Fields.ReportsToExtension[this]; }
            set { Fields.ReportsToExtension[this] = value; }
        }

        [DisplayName("Reports To Photo"), Expression("jReportsTo.[Photo]")]
        public Stream ReportsToPhoto
        {
            get { return Fields.ReportsToPhoto[this]; }
            set { Fields.ReportsToPhoto[this] = value; }
        }

        [DisplayName("Reports To Notes"), Expression("jReportsTo.[Notes]")]
        public String ReportsToNotes
        {
            get { return Fields.ReportsToNotes[this]; }
            set { Fields.ReportsToNotes[this] = value; }
        }

        [DisplayName("Reports To"), Expression("jReportsTo.[ReportsTo]")]
        public Int32? ReportsToReportsTo
        {
            get { return Fields.ReportsToReportsTo[this]; }
            set { Fields.ReportsToReportsTo[this] = value; }
        }

        [DisplayName("Reports To Photo Path"), Expression("jReportsTo.[PhotoPath]")]
        public String ReportsToPhotoPath
        {
            get { return Fields.ReportsToPhotoPath[this]; }
            set { Fields.ReportsToPhotoPath[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.EmployeeID; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.FullName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public EmployeeRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field EmployeeID;
            public StringField LastName;
            public StringField FirstName;
            public StringField FullName;
            public StringField Title;
            public StringField TitleOfCourtesy;
            public DateTimeField BirthDate;
            public DateTimeField HireDate;
            public StringField Address;
            public StringField City;
            public StringField Region;
            public StringField PostalCode;
            public StringField Country;
            public StringField HomePhone;
            public StringField Extension;
            public StreamField Photo;
            public StringField Notes;
            public Int32Field ReportsTo;
            public StringField PhotoPath;

            public StringField ReportsToFullName;
            public StringField ReportsToLastName;
            public StringField ReportsToFirstName;
            public StringField ReportsToTitle;
            public StringField ReportsToTitleOfCourtesy;
            public DateTimeField ReportsToBirthDate;
            public DateTimeField ReportsToHireDate;
            public StringField ReportsToAddress;
            public StringField ReportsToCity;
            public StringField ReportsToRegion;
            public StringField ReportsToPostalCode;
            public StringField ReportsToCountry;
            public StringField ReportsToHomePhone;
            public StringField ReportsToExtension;
            public StreamField ReportsToPhoto;
            public StringField ReportsToNotes;
            public Int32Field ReportsToReportsTo;
            public StringField ReportsToPhotoPath;

            public Int32Field Gender;

            public RowFields()
                : base("Employees")
            {
                LocalTextPrefix = "Northwind.Employee";
            }
        }
    }
}