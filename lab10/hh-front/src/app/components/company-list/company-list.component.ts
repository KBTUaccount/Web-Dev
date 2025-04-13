import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyService } from '../../services/company.service';
import { Company } from '../../interfaces/company';
import { Vacancy } from '../../interfaces/vacancy';


@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent {
  companies: Company[] = [];
  vacancies: Vacancy[] = [];
  selectedCompanyName = '';

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe(data => {
      this.companies = data;
    });
  }

  showVacancies(company: Company): void {
    this.selectedCompanyName = company.name;
    this.companyService.getCompanyVacancies(company.id).subscribe(data => {
      this.vacancies = data;
    });
  }
}
