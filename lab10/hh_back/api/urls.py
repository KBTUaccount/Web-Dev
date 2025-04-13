from django.urls import path
from api import views

urlpatterns = [
    path('companies/', views.CompanyListCreate.as_view(), name='companies-list'),
    path('companies/<int:pk>/', views.CompanyRetrieveUpdateDestroy.as_view(), name='company-detail'),
    path('companies/<int:pk>/vacancies/', views.VacanciesByCompany.as_view(), name='vacancies-by-companies'),
    path('vacancies/', views.VacancyListCreate.as_view(), name='vacancies-list'),
    path('vacancies/<int:pk>/', views.VacancyRetrieveUpdateDestroy.as_view(), name='vacancy-detail'),
    path('vacancies/top_ten/', views.TopTenVacancies.as_view(), name='top-vacancies'),
]
