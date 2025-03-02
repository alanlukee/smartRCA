import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IssueService } from '../services/issue.service';
import { DashboardComponent } from "../dashboard/dashboard.component";  // Adjusted import path
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, DashboardComponent],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchCriteria = {
    SPRNo: "",
    headline: "",
    project: "",
    status: "",
    assignee: ""
  };

  searchResults: any[] = [];

  constructor(private http: HttpClient,private issueService: IssueService) {}

  search() {
    
    this.issueService.searchIssues(this.searchCriteria).subscribe(
      (data: any) => {  // Explicitly define the type
        this.searchResults = data;
    
        // Include the HTTP POST request here
        this.http.post('http://localhost:8080/issues', { searchCriteria: this.searchCriteria })
          .subscribe(
            (response: any) => {  // Explicitly define the type
              console.log('POST request successful', response);
            },
            (error: any) => {  // Explicitly define the type
              console.error('Error during POST request', error);
            }
          );
      },
      (error: any) => {  // Explicitly define the type
        console.error('Error fetching search results', error);
      }
    );
  }

  clear() {
    this.searchCriteria = { SPRNo: "", headline: "", project: "", status: "", assignee: "" };
    this.searchResults = [];
  }
}