﻿Q.ScriptData.set('Form.Membership.ResetPassword', [{"name":"NewPassword","title":"New Password","editorType":"Password","required":true,"width":80,"filteringType":"Editor","filteringParams":{"editorType":"Password","useLike":true}},{"name":"ConfirmPassword","title":"Confirm Password","editorType":"Password","required":true,"width":80,"filteringType":"Editor","filteringParams":{"editorType":"Password","useLike":true}}]);



Q.ScriptData.set('Form.Membership.ForgotPassword', [{"name":"Email","title":"E-mail Address","editorType":"Email","required":true,"width":80,"filteringType":"Editor","filteringParams":{"editorType":"Email","useLike":true}}]);



Q.ScriptData.set('Form.Membership.ChangePassword', [{"name":"OldPassword","title":"Current Password","editorType":"Password","required":true,"width":80,"filteringType":"Editor","filteringParams":{"editorType":"Password","useLike":true}},{"name":"NewPassword","title":"New Password","editorType":"Password","required":true,"width":80,"filteringType":"Editor","filteringParams":{"editorType":"Password","useLike":true}},{"name":"ConfirmPassword","title":"Confirm Password","editorType":"Password","required":true,"width":80,"filteringType":"Editor","filteringParams":{"editorType":"Password","useLike":true}}]);



Q.ScriptData.set('Form.Membership.SignUp', [{"name":"DisplayName","title":"DisplayName","placeholder":"Full name","required":true,"width":80},{"name":"Email","title":"Email","placeholder":"Email","editorType":"Email","required":true,"width":80,"filteringType":"Editor","filteringParams":{"editorType":"Email","useLike":true}},{"name":"ConfirmEmail","title":"ConfirmEmail","placeholder":"Confirm email","editorType":"Email","required":true,"width":80,"filteringType":"Editor","filteringParams":{"editorType":"Email","useLike":true}},{"name":"Password","title":"Password","placeholder":"Password","editorType":"Password","required":true,"width":80,"filteringType":"Editor","filteringParams":{"editorType":"Password","useLike":true}},{"name":"ConfirmPassword","title":"ConfirmPassword","placeholder":"Confirm password","editorType":"Password","required":true,"width":80,"filteringType":"Editor","filteringParams":{"editorType":"Password","useLike":true}}]);



Q.ScriptData.set('Form.Membership.Login', [{"name":"Username","title":"Db.Administration.User.Username","placeholder":"default username is 'admin'","editorParams":{"maxLength":100},"maxLength":100,"required":true,"width":150},{"name":"Password","title":"Db.Administration.User.Password","placeholder":"default password for 'admin' is 'serenity'","editorType":"Password","editorParams":{"maxLength":50},"maxLength":50,"required":true,"width":150,"sortable":false,"filteringType":"Editor","filteringParams":{"editorType":"Password","useLike":true},"notFilterable":true}]);



Q.ScriptData.set('Form.Organization.Contact', [{"name":"Title","title":"Db.Organization.Contact.Title","editorParams":{"maxLength":30},"maxLength":30,"width":150},{"name":"FirstName","title":"Db.Organization.Contact.FirstName","editorParams":{"maxLength":50},"maxLength":50,"required":true,"width":150},{"name":"LastName","title":"Db.Organization.Contact.LastName","editorParams":{"maxLength":50},"maxLength":50,"required":true,"width":150},{"name":"Email","title":"Db.Organization.Contact.Email","editorType":"Email","editorParams":{"maxLength":100},"maxLength":100,"required":true,"width":150,"filteringType":"Editor","filteringParams":{"editorType":"Email","useLike":true}},{"name":"IdentityNo","title":"Db.Organization.Contact.IdentityNo","editorParams":{"maxLength":20},"maxLength":20,"width":150},{"name":"UserId","title":"Db.Organization.Contact.UserId","editorType":"Lookup","editorParams":{"lookupKey":"Administration.User"},"insertPermission":"Administration:Security","updatePermission":"Administration:Security","formatterType":"Number","width":65,"filteringType":"Lookup","filteringParams":{"lookupKey":"Administration.User"}}]);



Q.ScriptData.set('Form.Organization.BusinessUnit', [{"name":"Name","title":"Db.Organization.BusinessUnit.Name","editorParams":{"maxLength":100},"maxLength":100,"required":true,"width":150},{"name":"ParentUnitId","title":"Db.Organization.BusinessUnit.ParentUnitId","editorType":"Serene.Organization.BusinessUnitEditor","formatterType":"Number","width":65,"filteringType":"Editor","filteringParams":{"editorType":"Serene.Organization.BusinessUnitEditor","useLike":false}}]);



Q.ScriptData.set('Form.Northwind.Category', [{"name":"CategoryName","title":"Db.Northwind.Category.CategoryName","editorParams":{"maxLength":15},"maxLength":15,"required":true,"localizable":true,"width":150},{"name":"Description","title":"Db.Northwind.Category.Description","localizable":true,"width":250}]);



Q.ScriptData.set('Form.Northwind.Customer', [{"name":"CustomerID","title":"Db.Northwind.Customer.CustomerID","editorParams":{"maxLength":5},"category":"General","maxLength":5,"required":true,"updatable":false,"width":150},{"name":"CompanyName","title":"Db.Northwind.Customer.CompanyName","editorParams":{"maxLength":40},"category":"General","maxLength":40,"required":true,"width":150},{"name":"ContactName","title":"Db.Northwind.Customer.ContactName","editorParams":{"maxLength":30},"category":"Contact","maxLength":30,"width":150},{"name":"ContactTitle","title":"Db.Northwind.Customer.ContactTitle","editorParams":{"maxLength":30},"category":"Contact","maxLength":30,"width":150},{"name":"Representatives","title":"Representatives","editorType":"Lookup","editorParams":{"lookupKey":"Northwind.Employee","multiple":true},"category":"Contact","width":80,"sortable":false,"filteringType":"Lookup","filteringParams":{"lookupKey":"Northwind.Employee"},"notFilterable":true,"quickFilter":true},{"name":"Address","title":"Db.Northwind.Customer.Address","editorParams":{"maxLength":60},"category":"Address","maxLength":60,"width":150},{"name":"City","title":"Db.Northwind.Customer.City","editorParams":{"maxLength":15},"category":"Address","maxLength":15,"width":150},{"name":"Region","title":"Db.Northwind.Customer.Region","editorParams":{"maxLength":15},"category":"Address","maxLength":15,"width":150},{"name":"PostalCode","title":"Db.Northwind.Customer.PostalCode","editorParams":{"maxLength":10},"category":"Address","maxLength":10,"width":150},{"name":"Country","title":"Db.Northwind.Customer.Country","editorParams":{"maxLength":15},"category":"Address","maxLength":15,"width":150,"filteringType":"Lookup","filteringParams":{"lookupKey":"Northwind.CustomerCountry"}},{"name":"Phone","title":"Db.Northwind.Customer.Phone","editorParams":{"maxLength":24},"category":"Address","maxLength":24,"width":150},{"name":"Fax","title":"Db.Northwind.Customer.Fax","editorParams":{"maxLength":24},"category":"Address","maxLength":24,"width":150},{"name":"NoteList","title":"NoteList","editorType":"Serene.Northwind.NotesEditor","category":"Address","width":80,"sortable":false,"filteringType":"Editor","filteringParams":{"editorType":"Serene.Northwind.NotesEditor","useLike":false},"notFilterable":true},{"name":"LastContactDate","title":"Db.Northwind.Customer.LastContactDate","editorType":"Date","category":"Details","formatterType":"Date","width":85,"filteringType":"Date"},{"name":"LastContactedBy","title":"Db.Northwind.Customer.LastContactedBy","editorType":"Lookup","editorParams":{"lookupKey":"Northwind.Employee"},"category":"Details","formatterType":"Number","width":65,"filteringType":"Lookup","filteringParams":{"lookupKey":"Northwind.Employee"}},{"name":"Email","title":"Db.Northwind.Customer.Email","editorType":"Email","editorParams":{"maxLength":100},"category":"Details","maxLength":100,"width":150,"filteringType":"Editor","filteringParams":{"editorType":"Email","useLike":true}},{"name":"SendBulletin","title":"Db.Northwind.Customer.SendBulletin","editorType":"Boolean","category":"Details","required":true,"defaultValue":false,"formatterType":"Checkbox","width":40,"filteringType":"Boolean"}]);



Q.ScriptData.set('Form.Northwind.OrderDetail', [{"name":"ProductID","title":"Db.Northwind.OrderDetail.ProductID","editorType":"Lookup","editorParams":{"lookupKey":"Northwind.Product"},"formatterType":"Number","width":65,"filteringType":"Lookup","filteringParams":{"lookupKey":"Northwind.Product"}},{"name":"UnitPrice","title":"Db.Northwind.OrderDetail.UnitPrice","editorType":"Decimal","required":true,"formatterType":"Number","formatterParams":{"displayFormat":"#,##0.00"},"displayFormat":"#,##0.00","alignment":"right","width":85,"filteringType":"Decimal","filteringParams":{"displayFormat":"#,##0.00"}},{"name":"Quantity","title":"Db.Northwind.OrderDetail.Quantity","editorType":"Integer","required":true,"defaultValue":1,"formatterType":"Number","alignment":"right","width":55,"filteringType":"Integer"},{"name":"Discount","title":"Db.Northwind.OrderDetail.Discount","editorType":"Decimal","required":true,"defaultValue":0,"formatterType":"Number","formatterParams":{"displayFormat":"#,##0.00"},"displayFormat":"#,##0.00","alignment":"right","width":85,"filteringType":"Decimal","filteringParams":{"displayFormat":"#,##0.00"}}]);



Q.ScriptData.set('Form.Northwind.Order', [{"name":"CustomerID","title":"Db.Northwind.Order.CustomerID","editorType":"Serene.Northwind.CustomerEditor","editorParams":{"maxLength":5},"category":"Order","maxLength":5,"required":true,"width":150,"filteringType":"Editor","filteringParams":{"editorType":"Serene.Northwind.CustomerEditor","useLike":true}},{"name":"OrderDate","title":"Db.Northwind.Order.OrderDate","editorType":"Date","category":"Order","required":true,"defaultValue":"now","formatterType":"Date","width":85,"filteringType":"Date"},{"name":"RequiredDate","title":"Db.Northwind.Order.RequiredDate","editorType":"Date","category":"Order","formatterType":"Date","width":85,"filteringType":"Date"},{"name":"EmployeeID","title":"Db.Northwind.Order.EmployeeID","editorType":"Lookup","editorParams":{"lookupKey":"Northwind.Employee"},"category":"Order","formatterType":"Number","width":65,"filteringType":"Lookup","filteringParams":{"lookupKey":"Northwind.Employee"}},{"name":"DetailList","title":"Db.Northwind.Order.DetailList","editorType":"Serene.Northwind.OrderDetailsEditor","category":"Order Details","width":80,"sortable":false,"filteringType":"Editor","filteringParams":{"editorType":"Serene.Northwind.OrderDetailsEditor","useLike":false},"notFilterable":true},{"name":"ShippedDate","title":"Db.Northwind.Order.ShippedDate","editorType":"Date","category":"Shipping","formatterType":"Date","width":85,"filteringType":"Date"},{"name":"ShipVia","title":"Db.Northwind.Order.ShipVia","editorType":"Lookup","editorParams":{"lookupKey":"Northwind.Shipper"},"category":"Shipping","formatterType":"Number","width":65,"filteringType":"Lookup","filteringParams":{"lookupKey":"Northwind.Shipper"}},{"name":"Freight","title":"Db.Northwind.Order.Freight","editorType":"Decimal","category":"Shipping","formatterType":"Number","formatterParams":{"displayFormat":"#,##0.####"},"displayFormat":"#,##0.####","alignment":"right","width":85,"filteringType":"Decimal","filteringParams":{"displayFormat":"#,##0.####"}},{"name":"ShipName","title":"Db.Northwind.Order.ShipName","editorParams":{"maxLength":40},"category":"Ship To","maxLength":40,"width":150},{"name":"ShipAddress","title":"Db.Northwind.Order.ShipAddress","editorParams":{"maxLength":60},"category":"Ship To","maxLength":60,"width":150},{"name":"ShipCity","title":"Db.Northwind.Order.ShipCity","editorParams":{"maxLength":15},"category":"Ship To","maxLength":15,"width":150},{"name":"ShipRegion","title":"Db.Northwind.Order.ShipRegion","editorParams":{"maxLength":15},"category":"Ship To","maxLength":15,"width":150},{"name":"ShipPostalCode","title":"Db.Northwind.Order.ShipPostalCode","editorParams":{"maxLength":10},"category":"Ship To","maxLength":10,"width":150},{"name":"ShipCountry","title":"Db.Northwind.Order.ShipCountry","editorParams":{"maxLength":15},"category":"Ship To","maxLength":15,"width":150}]);



Q.ScriptData.set('Form.Northwind.Product', [{"name":"ProductName","title":"Db.Northwind.Product.ProductName","editorParams":{"maxLength":40},"category":"General","maxLength":40,"required":true,"localizable":true,"width":150},{"name":"ProductImage","title":"Db.Northwind.Product.ProductImage","editorType":"ImageUpload","editorParams":{"maxLength":100},"category":"General","maxLength":100,"width":150,"filteringType":"Editor","filteringParams":{"editorType":"ImageUpload","useLike":true}},{"name":"Discontinued","title":"Db.Northwind.Product.Discontinued","editorType":"Boolean","category":"General","required":true,"formatterType":"Checkbox","width":40,"filteringType":"Boolean"},{"name":"SupplierID","title":"Db.Northwind.Product.SupplierID","editorType":"Lookup","editorParams":{"lookupKey":"Northwind.Supplier","inplaceAdd":true},"category":"General","formatterType":"Number","width":65,"filteringType":"Lookup","filteringParams":{"lookupKey":"Northwind.Supplier"}},{"name":"CategoryID","title":"Db.Northwind.Product.CategoryID","editorType":"Lookup","editorParams":{"lookupKey":"Northwind.Category","inplaceAdd":true},"category":"General","formatterType":"Number","width":65,"filteringType":"Lookup","filteringParams":{"lookupKey":"Northwind.Category"}},{"name":"QuantityPerUnit","title":"Db.Northwind.Product.QuantityPerUnit","editorParams":{"maxLength":20},"category":"Pricing","maxLength":20,"width":150},{"name":"UnitPrice","title":"Db.Northwind.Product.UnitPrice","editorType":"Decimal","category":"Pricing","formatterType":"Number","width":85,"filteringType":"Decimal"},{"name":"UnitsInStock","title":"Db.Northwind.Product.UnitsInStock","editorType":"Integer","editorParams":{"maxValue":32767},"category":"Status","required":true,"defaultValue":0,"width":55,"filteringType":"Integer"},{"name":"UnitsOnOrder","title":"Db.Northwind.Product.UnitsOnOrder","editorType":"Integer","editorParams":{"maxValue":32767},"category":"Status","required":true,"defaultValue":0,"width":55,"filteringType":"Integer"},{"name":"ReorderLevel","title":"Db.Northwind.Product.ReorderLevel","editorType":"Integer","editorParams":{"maxValue":32767},"category":"Status","required":true,"defaultValue":0,"width":55,"filteringType":"Integer"}]);



Q.ScriptData.set('Form.Northwind.Region', [{"name":"RegionID","title":"Db.Northwind.Region.RegionID","editorType":"Integer","required":true,"updatable":false,"formatterType":"Number","width":65,"filteringType":"Integer"},{"name":"RegionDescription","title":"Db.Northwind.Region.RegionDescription","editorParams":{"maxLength":50},"maxLength":50,"required":true,"width":150}]);



Q.ScriptData.set('Form.Northwind.Shipper', [{"name":"CompanyName","title":"Db.Northwind.Shipper.CompanyName","editorParams":{"maxLength":40},"maxLength":40,"required":true,"width":150},{"name":"Phone","title":"Db.Northwind.Shipper.Phone","editorType":"Serene.Northwind.PhoneEditor","editorParams":{"maxLength":24},"maxLength":24,"width":150,"filteringType":"Editor","filteringParams":{"editorType":"Serene.Northwind.PhoneEditor","useLike":true}}]);



Q.ScriptData.set('Form.Northwind.Supplier', [{"name":"CompanyName","title":"Db.Northwind.Supplier.CompanyName","editorParams":{"maxLength":40},"maxLength":40,"required":true,"width":150},{"name":"ContactName","title":"Db.Northwind.Supplier.ContactName","editorParams":{"maxLength":30},"maxLength":30,"width":150},{"name":"ContactTitle","title":"Db.Northwind.Supplier.ContactTitle","editorParams":{"maxLength":30},"maxLength":30,"width":150},{"name":"Address","title":"Db.Northwind.Supplier.Address","editorParams":{"maxLength":60},"maxLength":60,"width":150},{"name":"Region","title":"Db.Northwind.Supplier.Region","editorParams":{"maxLength":15},"maxLength":15,"width":150},{"name":"PostalCode","title":"Db.Northwind.Supplier.PostalCode","editorParams":{"maxLength":10},"maxLength":10,"width":150},{"name":"Country","title":"Db.Northwind.Supplier.Country","editorParams":{"maxLength":15},"maxLength":15,"width":150,"filteringType":"Lookup","filteringParams":{"lookupKey":"Northwind.SupplierCountry"}},{"name":"City","title":"Db.Northwind.Supplier.City","editorParams":{"maxLength":15},"maxLength":15,"width":150},{"name":"Phone","title":"Db.Northwind.Supplier.Phone","editorParams":{"maxLength":24},"maxLength":24,"width":150},{"name":"Fax","title":"Db.Northwind.Supplier.Fax","editorParams":{"maxLength":24},"maxLength":24,"width":150},{"name":"HomePage","title":"Db.Northwind.Supplier.HomePage","width":250}]);



Q.ScriptData.set('Form.Northwind.Territory', [{"name":"TerritoryID","title":"Db.Northwind.Territory.TerritoryID","editorParams":{"maxLength":20},"maxLength":20,"required":true,"updatable":false,"width":150},{"name":"TerritoryDescription","title":"Db.Northwind.Territory.TerritoryDescription","editorParams":{"maxLength":50},"maxLength":50,"required":true,"width":150},{"name":"RegionID","title":"Db.Northwind.Territory.RegionID","editorType":"Lookup","editorParams":{"lookupKey":"Northwind.Region"},"required":true,"formatterType":"Number","width":65,"filteringType":"Lookup","filteringParams":{"lookupKey":"Northwind.Region"}}]);



Q.ScriptData.set('Form.Meeting.MeetingAgendaRelevant', [{"name":"AgendaId","title":"Db.Meeting.MeetingAgendaRelevant.AgendaId","editorType":"Integer","required":true,"formatterType":"Number","width":65,"filteringType":"Integer"},{"name":"ContactId","title":"Db.Meeting.MeetingAgendaRelevant.ContactId","editorType":"Integer","required":true,"formatterType":"Number","width":65,"filteringType":"Integer"}]);



Q.ScriptData.set('Form.Meeting.MeetingAgenda', [{"name":"MeetingId","title":"Db.Meeting.MeetingAgenda.MeetingId","editorType":"Integer","required":true,"formatterType":"Number","width":65,"filteringType":"Integer"},{"name":"AgendaNumber","title":"Db.Meeting.MeetingAgenda.AgendaNumber","editorType":"Integer","required":true,"formatterType":"Number","width":65,"filteringType":"Integer"},{"name":"Title","title":"Db.Meeting.MeetingAgenda.Title","editorParams":{"maxLength":2000},"maxLength":2000,"width":150},{"name":"Description","title":"Db.Meeting.MeetingAgenda.Description","width":250},{"name":"AgendaTypeId","title":"Db.Meeting.MeetingAgenda.AgendaTypeId","editorType":"Integer","required":true,"formatterType":"Number","width":65,"filteringType":"Integer"},{"name":"RequestedByContactId","title":"Db.Meeting.MeetingAgenda.RequestedByContactId","editorType":"Integer","formatterType":"Number","width":65,"filteringType":"Integer"},{"name":"Images","title":"Db.Meeting.MeetingAgenda.Images","width":250},{"name":"Attachments","title":"Db.Meeting.MeetingAgenda.Attachments","width":250}]);



Q.ScriptData.set('Form.Meeting.MeetingAgendaType', [{"name":"Name","title":"Db.Meeting.MeetingAgendaType.Name","editorParams":{"maxLength":100},"maxLength":100,"required":true,"width":350}]);



Q.ScriptData.set('Form.Meeting.MeetingAttendee', [{"name":"MeetingId","title":"Db.Meeting.MeetingAttendee.MeetingId","editorType":"Integer","required":true,"formatterType":"Number","width":65,"filteringType":"Integer"},{"name":"ContactId","title":"Db.Meeting.MeetingAttendee.ContactId","editorType":"Integer","required":true,"formatterType":"Number","width":65,"filteringType":"Integer"},{"name":"AttendeeType","title":"Db.Meeting.MeetingAttendee.AttendeeType","editorType":"Enum","editorParams":{"enumKey":"Meeting.MeetingAttendeeType"},"required":true,"defaultValue":1,"formatterType":"Enum","formatterParams":{"enumKey":"Meeting.MeetingAttendeeType"},"width":65,"filteringType":"Enum","filteringParams":{"enumKey":"Meeting.MeetingAttendeeType"}},{"name":"AttendanceStatus","title":"Db.Meeting.MeetingAttendee.AttendanceStatus","editorType":"Enum","editorParams":{"enumKey":"Meeting.MeetingAttendanceStatus"},"required":true,"defaultValue":0,"formatterType":"Enum","formatterParams":{"enumKey":"Meeting.MeetingAttendanceStatus"},"width":65,"filteringType":"Enum","filteringParams":{"enumKey":"Meeting.MeetingAttendanceStatus"}}]);



Q.ScriptData.set('Form.Meeting.MeetingDecisionRelevant', [{"name":"DecisionId","title":"Db.Meeting.MeetingDecisionRelevant.DecisionId","editorType":"Integer","required":true,"formatterType":"Number","width":65,"filteringType":"Integer"},{"name":"ContactId","title":"Db.Meeting.MeetingDecisionRelevant.ContactId","editorType":"Integer","required":true,"formatterType":"Number","width":65,"filteringType":"Integer"}]);



Q.ScriptData.set('Form.Meeting.MeetingDecision', [{"name":"MeetingId","title":"Db.Meeting.MeetingDecision.MeetingId","editorType":"Integer","required":true,"formatterType":"Number","width":65,"filteringType":"Integer"},{"name":"AgendaId","title":"Db.Meeting.MeetingDecision.AgendaId","editorType":"Integer","required":true,"formatterType":"Number","width":65,"filteringType":"Integer"},{"name":"Description","title":"Db.Meeting.MeetingDecision.Description","width":250},{"name":"DecisionNumber","title":"Db.Meeting.MeetingDecision.DecisionNumber","editorType":"Integer","required":true,"formatterType":"Number","width":65,"filteringType":"Integer"},{"name":"ResponsibleContactId","title":"Db.Meeting.MeetingDecision.ResponsibleContactId","editorType":"Integer","formatterType":"Number","width":65,"filteringType":"Integer"},{"name":"DueDate","title":"Db.Meeting.MeetingDecision.DueDate","editorType":"Date","formatterType":"Date","width":85,"filteringType":"Date"},{"name":"ResolutionStatus","title":"Db.Meeting.MeetingDecision.ResolutionStatus","editorType":"Integer","required":true,"formatterType":"Number","width":65,"filteringType":"Integer"},{"name":"Images","title":"Db.Meeting.MeetingDecision.Images","width":250},{"name":"Attachments","title":"Db.Meeting.MeetingDecision.Attachments","width":250}]);



Q.ScriptData.set('Form.Meeting.MeetingLocation', [{"name":"Name","title":"Db.Meeting.MeetingLocation.Name","editorParams":{"maxLength":100},"maxLength":100,"required":true,"width":350},{"name":"Address","title":"Db.Meeting.MeetingLocation.Address","editorParams":{"maxLength":300},"maxLength":300,"width":150},{"name":"Latitude","title":"Db.Meeting.MeetingLocation.Latitude","editorType":"Decimal","required":true,"formatterType":"Number","width":85,"filteringType":"Decimal"},{"name":"Longitude","title":"Db.Meeting.MeetingLocation.Longitude","editorType":"Decimal","required":true,"formatterType":"Number","width":85,"filteringType":"Decimal"}]);



Q.ScriptData.set('Form.Meeting.Meeting', [{"name":"MeetingName","title":"Db.Meeting.Meeting.MeetingName","editorParams":{"maxLength":100},"maxLength":100,"required":true,"width":150},{"name":"MeetingTypeId","title":"Db.Meeting.Meeting.MeetingTypeId","editorType":"Lookup","editorParams":{"lookupKey":"Meeting.MeetingType","inplaceAdd":true,"inplaceAddPermission":"Meeting:Management"},"required":true,"readOnly":true,"formatterType":"Number","width":65,"filteringType":"Lookup","filteringParams":{"lookupKey":"Meeting.MeetingType"}},{"name":"MeetingNumber","title":"Db.Meeting.Meeting.MeetingNumber","editorParams":{"maxLength":20},"maxLength":20,"width":150},{"name":"StartDate","title":"Db.Meeting.Meeting.StartDate","editorType":"DateTime","required":true,"defaultValue":"now","formatterType":"DateTime","width":85,"filteringType":"DateTime"},{"name":"EndDate","title":"Db.Meeting.Meeting.EndDate","editorType":"DateTime","required":true,"defaultValue":"now","formatterType":"DateTime","width":85,"filteringType":"DateTime"},{"name":"LocationId","title":"Db.Meeting.Meeting.LocationId","editorType":"Lookup","editorParams":{"lookupKey":"Meeting.MeetingLocation","inplaceAdd":true,"inplaceAddPermission":"Meeting:Management"},"formatterType":"Number","width":65,"filteringType":"Lookup","filteringParams":{"lookupKey":"Meeting.MeetingLocation"}},{"name":"UnitId","title":"Db.Meeting.Meeting.UnitId","editorType":"Serene.Organization.BusinessUnitEditor","editorParams":{"inplaceAdd":true,"inplaceAddPermission":"Organization:BusinessUnits:Management"},"formatterType":"Number","width":65,"filteringType":"Editor","filteringParams":{"editorType":"Serene.Organization.BusinessUnitEditor","useLike":false}},{"name":"OrganizerContactId","title":"Db.Meeting.Meeting.OrganizerContactId","editorType":"Lookup","editorParams":{"lookupKey":"Organization.Contact","inplaceAdd":true,"inplaceAddPermission":"Organization:Contacts:Management"},"formatterType":"Number","width":65,"filteringType":"Lookup","filteringParams":{"lookupKey":"Organization.Contact"}},{"name":"ReporterContactId","title":"Db.Meeting.Meeting.ReporterContactId","editorType":"Lookup","editorParams":{"lookupKey":"Organization.Contact","inplaceAdd":true,"inplaceAddPermission":"Organization:Contacts:Management"},"formatterType":"Number","width":65,"filteringType":"Lookup","filteringParams":{"lookupKey":"Organization.Contact"}},{"name":"AttendeeList","title":"Db.Meeting.Meeting.AttendeeList","editorType":"Serene.Meeting.MeetingAttendeeEditor","width":80,"sortable":false,"filteringType":"Editor","filteringParams":{"editorType":"Serene.Meeting.MeetingAttendeeEditor","useLike":false},"notFilterable":true}]);



Q.ScriptData.set('Form.Meeting.MeetingType', [{"name":"Name","title":"Db.Meeting.MeetingType.Name","editorParams":{"maxLength":100},"maxLength":100,"required":true,"width":350}]);



Q.ScriptData.set('Form.BasicSamples.PopulateLinkedData', [{"name":"CustomerID","title":"Db.Northwind.Order.CustomerID","editorType":"Serene.Northwind.CustomerEditor","editorParams":{"maxLength":5},"category":"Order","maxLength":5,"required":true,"width":150,"filteringType":"Editor","filteringParams":{"editorType":"Serene.Northwind.CustomerEditor","useLike":true}},{"name":"CustomerContactName","title":"Db.Northwind.Order.CustomerContactName","category":"Customer Details","readOnly":true,"width":250},{"name":"CustomerContactTitle","title":"Db.Northwind.Order.CustomerContactTitle","category":"Customer Details","readOnly":true,"width":250},{"name":"CustomerCity","title":"Db.Northwind.Order.CustomerCity","category":"Customer Details","readOnly":true,"width":250},{"name":"CustomerRegion","title":"Db.Northwind.Order.CustomerRegion","category":"Customer Details","readOnly":true,"width":250},{"name":"CustomerCountry","title":"Db.Northwind.Order.CustomerCountry","category":"Customer Details","readOnly":true,"width":250},{"name":"CustomerPhone","title":"Db.Northwind.Order.CustomerPhone","category":"Customer Details","readOnly":true,"width":250},{"name":"CustomerFax","title":"Db.Northwind.Order.CustomerFax","category":"Customer Details","readOnly":true,"width":250},{"name":"OrderDate","title":"Db.Northwind.Order.OrderDate","editorType":"Date","category":"Order Details","required":true,"defaultValue":"now","formatterType":"Date","width":85,"filteringType":"Date"},{"name":"RequiredDate","title":"Db.Northwind.Order.RequiredDate","editorType":"Date","category":"Order Details","formatterType":"Date","width":85,"filteringType":"Date"},{"name":"EmployeeID","title":"Db.Northwind.Order.EmployeeID","editorType":"Lookup","editorParams":{"lookupKey":"Northwind.Employee"},"category":"Order Details","formatterType":"Number","width":65,"filteringType":"Lookup","filteringParams":{"lookupKey":"Northwind.Employee"}},{"name":"DetailList","title":"Db.Northwind.Order.DetailList","editorType":"Serene.Northwind.OrderDetailsEditor","category":"Order Details","width":80,"sortable":false,"filteringType":"Editor","filteringParams":{"editorType":"Serene.Northwind.OrderDetailsEditor","useLike":false},"notFilterable":true}]);



Q.ScriptData.set('Form.BasicSamples.StaticTextBlock', [{"name":"StaticText","title":"Static Text","editorType":"Serene.StaticTextBlock","editorParams":{"text":"Here is some static text"},"width":80,"filteringType":"Editor","filteringParams":{"editorType":"Serene.StaticTextBlock","useLike":true}},{"name":"SomeInput","title":"SomeInput","width":80,"filteringType":"Editor","filteringParams":{"editorType":"String","useLike":true}},{"name":"HtmlList","title":"Static Html","editorType":"Serene.StaticTextBlock","editorParams":{"text":"<h4 style='margin-top: 0px;'>Here is an HTML list:</h2><ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>","isHtml":true},"width":80,"filteringType":"Editor","filteringParams":{"editorType":"Serene.StaticTextBlock","useLike":true}},{"name":"FromLocalText","title":"From a Local Text","editorType":"Serene.StaticTextBlock","editorParams":{"text":"Site.Dashboard.ContentDescription","isLocalText":true,"isHtml":true},"width":80,"filteringType":"Editor","filteringParams":{"editorType":"Serene.StaticTextBlock","useLike":true}},{"name":"DisplayFieldValue","title":"Display Field Value","editorType":"Serene.StaticTextBlock","editorParams":{"isHtml":true},"width":80,"filteringType":"Editor","filteringParams":{"editorType":"Serene.StaticTextBlock","useLike":true}}]);



Q.ScriptData.set('Form.BasicSamples.HarcodedValues', [{"name":"SomeValue","title":"Some Value","editorType":"Serene.BasicSamples.HardcodedValuesEditor","width":80,"filteringType":"Editor","filteringParams":{"editorType":"Serene.BasicSamples.HardcodedValuesEditor","useLike":true}}]);



Q.ScriptData.set('Form.BasicSamples.ChangingLookupText', [{"name":"ProductID","title":"Db.Northwind.OrderDetail.ProductID","editorType":"Serene.BasicSamples.ChangingLookupTextEditor","formatterType":"Number","width":65,"filteringType":"Editor","filteringParams":{"editorType":"Serene.BasicSamples.ChangingLookupTextEditor","useLike":false}},{"name":"UnitPrice","title":"Db.Northwind.OrderDetail.UnitPrice","editorType":"Decimal","required":true,"formatterType":"Number","formatterParams":{"displayFormat":"#,##0.00"},"displayFormat":"#,##0.00","alignment":"right","width":85,"filteringType":"Decimal","filteringParams":{"displayFormat":"#,##0.00"}},{"name":"Quantity","title":"Db.Northwind.OrderDetail.Quantity","editorType":"Integer","required":true,"defaultValue":1,"formatterType":"Number","alignment":"right","width":55,"filteringType":"Integer"},{"name":"Discount","title":"Db.Northwind.OrderDetail.Discount","editorType":"Decimal","required":true,"defaultValue":0,"formatterType":"Number","formatterParams":{"displayFormat":"#,##0.00"},"displayFormat":"#,##0.00","alignment":"right","width":85,"filteringType":"Decimal","filteringParams":{"displayFormat":"#,##0.00"}}]);



Q.ScriptData.set('Form.BasicSamples.FilteredLookupInDetail', [{"name":"CustomerID","title":"Db.Northwind.Order.CustomerID","editorType":"Serene.Northwind.CustomerEditor","editorParams":{"maxLength":5},"maxLength":5,"required":true,"width":150,"filteringType":"Editor","filteringParams":{"editorType":"Serene.Northwind.CustomerEditor","useLike":true}},{"name":"OrderDate","title":"Db.Northwind.Order.OrderDate","editorType":"Date","required":true,"defaultValue":"now","formatterType":"Date","width":85,"filteringType":"Date"},{"name":"CategoryID","title":"CategoryID","editorType":"Lookup","editorParams":{"lookupKey":"Northwind.Category"},"oneWay":true,"formatterType":"Number","width":80,"filteringType":"Lookup","filteringParams":{"lookupKey":"Northwind.Category"}},{"name":"DetailList","title":"Db.Northwind.Order.DetailList","editorType":"Serene.BasicSamples.FilteredLookupDetailEditor","category":"Order Details","width":80,"sortable":false,"filteringType":"Editor","filteringParams":{"editorType":"Serene.BasicSamples.FilteredLookupDetailEditor","useLike":false},"notFilterable":true}]);



Q.ScriptData.set('Form.BasicSamples.LookupFilterByMultiple', [{"name":"ProductName","title":"Db.Northwind.Product.ProductName","editorParams":{"maxLength":40},"category":"General","maxLength":40,"required":true,"localizable":true,"width":150},{"name":"ProductImage","title":"Db.Northwind.Product.ProductImage","editorType":"ImageUpload","editorParams":{"maxLength":100},"category":"General","maxLength":100,"width":150,"filteringType":"Editor","filteringParams":{"editorType":"ImageUpload","useLike":true}},{"name":"Discontinued","title":"Db.Northwind.Product.Discontinued","editorType":"Boolean","category":"General","required":true,"formatterType":"Checkbox","width":40,"filteringType":"Boolean"},{"name":"SupplierID","title":"Db.Northwind.Product.SupplierID","editorType":"Lookup","editorParams":{"lookupKey":"Northwind.Supplier","inplaceAdd":true},"category":"General","formatterType":"Number","width":65,"filteringType":"Lookup","filteringParams":{"lookupKey":"Northwind.Supplier"}},{"name":"CategoryID","title":"Db.Northwind.Product.CategoryID","editorType":"Serene.BasicSamples.ProduceSeafoodCategoryEditor","category":"General","formatterType":"Number","width":65,"filteringType":"Editor","filteringParams":{"editorType":"Serene.BasicSamples.ProduceSeafoodCategoryEditor","useLike":false}},{"name":"QuantityPerUnit","title":"Db.Northwind.Product.QuantityPerUnit","editorParams":{"maxLength":20},"category":"Pricing","maxLength":20,"width":150},{"name":"UnitPrice","title":"Db.Northwind.Product.UnitPrice","editorType":"Decimal","category":"Pricing","formatterType":"Number","width":85,"filteringType":"Decimal"},{"name":"UnitsInStock","title":"Db.Northwind.Product.UnitsInStock","editorType":"Integer","editorParams":{"maxValue":32767},"category":"Status","required":true,"defaultValue":0,"width":55,"filteringType":"Integer"},{"name":"UnitsOnOrder","title":"Db.Northwind.Product.UnitsOnOrder","editorType":"Integer","editorParams":{"maxValue":32767},"category":"Status","required":true,"defaultValue":0,"width":55,"filteringType":"Integer"},{"name":"ReorderLevel","title":"Db.Northwind.Product.ReorderLevel","editorType":"Integer","editorParams":{"maxValue":32767},"category":"Status","required":true,"defaultValue":0,"width":55,"filteringType":"Integer"}]);



Q.ScriptData.set('Form.BasicSamples.ProductExcelImport', [{"name":"FileName","title":"FileName","editorType":"ImageUpload","editorParams":{"allowNonImage":true},"required":true,"width":80,"filteringType":"Editor","filteringParams":{"editorType":"ImageUpload","useLike":true}}]);



Q.ScriptData.set('Form.BasicSamples.DragDropSample', [{"name":"Title","title":"Db.BasicSamples.DragDropSample.Title","editorParams":{"maxLength":100},"maxLength":100,"required":true,"width":150}]);



Q.ScriptData.set('Form.Administration.User', [{"name":"Username","title":"Db.Administration.User.Username","editorParams":{"maxLength":100},"maxLength":100,"required":true,"width":150},{"name":"DisplayName","title":"Db.Administration.User.DisplayName","editorParams":{"maxLength":100},"maxLength":100,"required":true,"width":150},{"name":"Email","title":"Db.Administration.User.Email","editorType":"Email","editorParams":{"maxLength":100},"maxLength":100,"width":150,"filteringType":"Editor","filteringParams":{"editorType":"Email","useLike":true}},{"name":"UserImage","title":"Db.Administration.User.UserImage","editorType":"ImageUpload","editorParams":{"maxLength":100},"maxLength":100,"width":150,"filteringType":"Editor","filteringParams":{"editorType":"ImageUpload","useLike":true}},{"name":"Password","title":"Db.Administration.User.Password","editorType":"Password","editorParams":{"maxLength":50},"maxLength":50,"required":true,"width":150,"sortable":false,"filteringType":"Editor","filteringParams":{"editorType":"Password","useLike":true},"notFilterable":true},{"name":"PasswordConfirm","title":"Db.Administration.User.PasswordConfirm","editorType":"Password","editorParams":{"maxLength":50},"maxLength":50,"required":true,"oneWay":true,"width":150,"sortable":false,"filteringType":"Editor","filteringParams":{"editorType":"Password","useLike":true},"notFilterable":true},{"name":"Source","title":"Db.Administration.User.Source","editorParams":{"maxLength":4},"maxLength":4,"required":true,"insertable":false,"updatable":false,"oneWay":true,"defaultValue":"site","width":150}]);



Q.ScriptData.set('Form.Administration.Language', [{"name":"LanguageId","title":"Db.Administration.Language.LanguageId","editorParams":{"maxLength":10},"maxLength":10,"required":true,"width":150},{"name":"LanguageName","title":"Db.Administration.Language.LanguageName","editorParams":{"maxLength":50},"maxLength":50,"required":true,"width":150}]);



Q.ScriptData.set('Form.Administration.Role', [{"name":"RoleName","title":"Db.Administration.Role.RoleName","editorParams":{"maxLength":100},"maxLength":100,"required":true,"width":150}]);




