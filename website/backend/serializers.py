from rest_framework import serializers
from backend.models import Product, User


class ProductSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Product
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = [
            'first_name', 
            'last_name',
            'username',
            'password',
            'email',
            'company_name',
            'address',
            'city',
            'state',
            'postal_code'
            ]

