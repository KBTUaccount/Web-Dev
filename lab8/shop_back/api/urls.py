from django.urls import path, include
from api import views

urlpatterns = [
    path('products/', views.ProductsListCreate.as_view(), name='product-list'),
    path('products/<int:pk>/', views.ProductRetrieveUpdateDestroy.as_view(), name='product-detail'),
    path('categories/', views.CategoryListCreate.as_view(), name='category-list'),
    path('categories/<int:pk>/', views.CategoryRetrieveUpdateDestroy.as_view(), name='category-detail'),
    path('categories/<int:pk>/products/', views.ProductsByCategory.as_view(), name='category-product-list'),
]