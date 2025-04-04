from rest_framework import serializers
from api.models import Vacancy, Company


class VacancySerializer(serializers.ModelSerializer):
    class Meta:
        model = Vacancy
        fields = ['name', 'description', 'salary', 'company']


class CompanySerializers(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ['name', 'description', 'city', 'address']