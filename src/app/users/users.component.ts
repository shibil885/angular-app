import { CommonModule, NgForOf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [NgForOf,CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users =[
    { id: 1, name: "Alice Johnson", email: "alice.johnson@example.com", age: 28, address: "123 Maple Street, Springfield", joinedDate: "2021-05-14T08:30:00Z" },
    { id: 2, name: "Bob Smith", email: "bob.smith@example.com", age: 34, address: "456 Oak Avenue, Springfield", joinedDate: "2019-11-22T14:45:00Z" },
    { id: 3, name: "Charlie Brown", email: "charlie.brown@example.com", age: 22, address: "789 Pine Road, Springfield", joinedDate: "2023-01-09T12:15:00Z" }
  ]
}
