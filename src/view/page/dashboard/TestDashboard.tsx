import {DefaultTableAgGrid, DefaultTableAgGridProps} from "@/component/agGrid/DefaultTableAgGrid.tsx";

export const TestDashboard = ()=>{
    const columnDefs: DefaultTableAgGridProps['columnDefs'] = [
        { headerName: 'ID', field: 'id', maxWidth:90 },
        { headerName: 'Name', field: 'name' },
        { headerName: 'LastName', field: 'lastName' },
        { headerName: 'FirstName', field: 'firstName' },
        { headerName: 'Age', field: 'age', maxWidth:90 },
        { headerName: 'Email', field: 'email' },
        { headerName: 'Phone', field: 'phone' },
        { headerName: 'Address', field: 'address' },
        { headerName: 'City', field: 'city' },
        { headerName: 'State', field: 'state' },
        { headerName: 'Country', field: 'country' },
        { headerName: 'PostalCode', field: 'postalCode' },
        { headerName: 'Company', field: 'company' },
        { headerName: 'JobTitle', field: 'jobTitle' },
        { headerName: 'Department', field: 'department' }
    ];


    const rowData: DefaultTableAgGridProps['rowData'] = [
        { id: 1, name: 'ThankGod', lastName: 'Morah', firstName: 'Chikelue', age: 29, email: 'thankgod.morah@example.com', phone: '123-456-7890', address: '123 Main St', city: 'Anytown', state: 'State', country: 'Country', postalCode: '12345', company: 'Company A', jobTitle: 'Developer', department: 'Engineering' },
        { id: 2, name: 'John', lastName: 'Doe', firstName: 'Smith', age: 32, email: 'john.doe@example.com', phone: '234-567-8901', address: '234 Elm St', city: 'Othertown', state: 'State', country: 'Country', postalCode: '23456', company: 'Company B', jobTitle: 'Manager', department: 'Sales' },
        { id: 3, name: 'Jane', lastName: 'Smith', firstName: 'Doe', age: 28, email: 'jane.smith@example.com', phone: '345-678-9012', address: '345 Oak St', city: 'Sometown', state: 'State', country: 'Country', postalCode: '34567', company: 'Company C', jobTitle: 'Designer', department: 'Marketing' },
        { id: 4, name: 'Michael', lastName: 'Brown', firstName: 'James', age: 35, email: 'michael.brown@example.com', phone: '456-789-0123', address: '456 Pine St', city: 'Anytown', state: 'State', country: 'Country', postalCode: '45678', company: 'Company D', jobTitle: 'Analyst', department: 'Finance' },
        { id: 5, name: 'Emily', lastName: 'Davis', firstName: 'Taylor', age: 27, email: 'emily.davis@example.com', phone: '567-890-1234', address: '567 Cedar St', city: 'Othertown', state: 'State', country: 'Country', postalCode: '56789', company: 'Company E', jobTitle: 'Consultant', department: 'Consulting' },
        { id: 6, name: 'Joshua', lastName: 'Wilson', firstName: 'Andrew', age: 33, email: 'joshua.wilson@example.com', phone: '678-901-2345', address: '678 Birch St', city: 'Sometown', state: 'State', country: 'Country', postalCode: '67890', company: 'Company F', jobTitle: 'Engineer', department: 'Engineering' },
        { id: 7, name: 'Sarah', lastName: 'Johnson', firstName: 'Nicole', age: 30, email: 'sarah.johnson@example.com', phone: '789-012-3456', address: '789 Spruce St', city: 'Anytown', state: 'State', country: 'Country', postalCode: '78901', company: 'Company G', jobTitle: 'Architect', department: 'Architecture' },
        { id: 8, name: 'David', lastName: 'Jones', firstName: 'Christopher', age: 31, email: 'david.jones@example.com', phone: '890-123-4567', address: '890 Maple St', city: 'Othertown', state: 'State', country: 'Country', postalCode: '89012', company: 'Company H', jobTitle: 'Technician', department: 'Technical Support' },
        { id: 9, name: 'Ashley', lastName: 'Martinez', firstName: 'Elizabeth', age: 26, email: 'ashley.martinez@example.com', phone: '901-234-5678', address: '901 Willow St', city: 'Sometown', state: 'State', country: 'Country', postalCode: '90123', company: 'Company I', jobTitle: 'Specialist', department: 'Customer Service' },
        { id: 10, name: 'Daniel', lastName: 'Garcia', firstName: 'Alexander', age: 34, email: 'daniel.garcia@example.com', phone: '012-345-6789', address: '012 Fir St', city: 'Anytown', state: 'State', country: 'Country', postalCode: '01234', company: 'Company J', jobTitle: 'Director', department: 'Operations' },
        { id: 11, name: 'Jessica', lastName: 'Anderson', firstName: 'Lauren', age: 28, email: 'jessica.anderson@example.com', phone: '123-456-7890', address: '123 Main St', city: 'Anytown', state: 'State', country: 'Country', postalCode: '12345', company: 'Company K', jobTitle: 'Coordinator', department: 'Logistics' },
        { id: 12, name: 'Matthew', lastName: 'Lee', firstName: 'Robert', age: 29, email: 'matthew.lee@example.com', phone: '234-567-8901', address: '234 Elm St', city: 'Othertown', state: 'State', country: 'Country', postalCode: '23456', company: 'Company L', jobTitle: 'Supervisor', department: 'Manufacturing' },
        { id: 13, name: 'Laura', lastName: 'Hernandez', firstName: 'Maria', age: 27, email: 'laura.hernandez@example.com', phone: '345-678-9012', address: '345 Oak St', city: 'Sometown', state: 'State', country: 'Country', postalCode: '34567', company: 'Company M', jobTitle: 'Executive', department: 'Executive' },
        { id: 14, name: 'Ryan', lastName: 'Clark', firstName: 'Paul', age: 32, email: 'ryan.clark@example.com', phone: '456-789-0123', address: '456 Pine St', city: 'Anytown', state: 'State', country: 'Country', postalCode: '45678', company: 'Company N', jobTitle: 'Consultant', department: 'Consulting' },
        { id: 15, name: 'Olivia', lastName: 'Lewis', firstName: 'Michelle', age: 26, email: 'olivia.lewis@example.com', phone: '567-890-1234', address: '567 Cedar St', city: 'Othertown', state: 'State', country: 'Country', postalCode: '56789', company: 'Company O', jobTitle: 'Assistant', department: 'Administration' },
        { id: 16, name: 'Brandon', lastName: 'Walker', firstName: 'Steven', age: 31, email: 'brandon.walker@example.com', phone: '678-901-2345', address: '678 Birch St', city: 'Sometown', state: 'State', country: 'Country', postalCode: '67890', company: 'Company P', jobTitle: 'Manager', department: 'Project Management' },
        { id: 17, name: 'Sophia', lastName: 'Hall', firstName: 'Victoria', age: 30, email: 'sophia.hall@example.com', phone: '789-012-3456', address: '789 Spruce St', city: 'Anytown', state: 'State', country: 'Country', postalCode: '78901', company: 'Company Q', jobTitle: 'Advisor', department: 'Advisory' },
        { id: 18, name: 'Andrew', lastName: 'Allen', firstName: 'Jonathan', age: 33, email: 'andrew.allen@example.com', phone: '890-123-4567', address: '890 Maple St', city: 'Othertown', state: 'State', country: 'Country', postalCode: '89012', company: 'Company R', jobTitle: 'Developer', department: 'Engineering' },
        { id: 19, name: 'Chloe', lastName: 'Young', firstName: 'Rebecca', age: 28, email: 'chloe.young@example.com', phone: '901-234-5678', address: '901 Willow St', city: 'Sometown', state: 'State', country: 'Country', postalCode: '90123', company: 'Company S', jobTitle: 'Designer', department: 'Design' },
        { id: 20, name: 'Christopher', lastName: 'King', firstName: 'Scott', age: 34, email: 'christopher.king@example.com', phone: '012-345-6789', address: '012 Fir St', city: 'Anytown', state: 'State', country: 'Country', postalCode: '01234', company: 'Company T', jobTitle: 'Strategist', department: 'Strategy' }
    ];

    function handleView(value: any){
        console.log(value.data)
    }
    return (
        <div className={'h-full flex flex-col items-center'}>
            <DefaultTableAgGrid name={'Products'} renderDeleteActions={handleView} action={{all: true}}  rowData={rowData} columnDefs={columnDefs}   />
        </div>
    )
}