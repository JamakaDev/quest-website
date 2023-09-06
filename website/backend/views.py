from django.contrib.auth.hashers import make_password


from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework import status

from backend.models import Product, User
from backend.serializers import UserSerializer

GET = ['GET']
PUT = ['PUT']
POST = ['POST']
DELETE = ['DELETE']

class UserViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated, IsAdminUser]


@api_view(POST)
def SignUpView(request):
    password = request.data.get('password')
    if password == '' or password is None:
        return  Response(status=status.HTTP_400_BAD_REQUEST)
    
    user_data = {
        'first_name':   request.data.get('first_name'), 
        'last_name':    request.data.get('last_name'),
        'username':     request.data.get('username'),
        'password':     make_password(password),
        'email':        request.data.get('email'),
        'company_name': request.data.get('company_name'),
        'address':      request.data.get('address'),
        'city':         request.data.get('city'),
        'state':        request.data.get('state'),
        'postal_code':  request.data.get('postal_code'),
    }
    serializer = UserSerializer(data=user_data, context={'author': user_data['username']})
    if serializer.is_valid():
        user = User.objects.create_user(
        first_name=   serializer.data['first_name'],
        last_name=    serializer.data['last_name'],
        username=     serializer.data['username'],
        password=     serializer.data['password'],
        email=        serializer.data['email'],
        company_name= serializer.data['company_name'],
        address=      serializer.data['address'],
        city=         serializer.data['city'],
        state=        serializer.data['state'],
        postal_code=  serializer.data['postal_code']
    ) 
        if user is not None:
            return Response( status=status.HTTP_201_CREATED)
        else:
            return Response(data=serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    else: return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(GET)
@permission_classes([IsAuthenticated])
def ProductsView(request):
    serialized_products = list()
    products = Product.objects.all()
    for product in products:
        serialized_products.append(product.serialize())
    return Response(data=serialized_products, status=status.HTTP_200_OK)



@api_view(POST)
def UserView(request):
    user = User.objects.get(username=request.data['username'])
    return Response(data=user.serialize(), status=status.HTTP_200_OK)


@api_view(GET)
def RoutesView(request):
    data={
        'user':          'http://127.0.0.1:8000/api/user/',
        'products':      'http://127.0.0.1:8000/api/products/',
        'auth_signin':   'http://127.0.0.1:8000/api/auth/signin/',
        'auth_signup':   'http://127.0.0.1:8000/api/auth/signup/',
        'auth_signout':  'http://127.0.0.1:8000/api/auth/signout/',
        'token_obtain':  'http://127.0.0.1:8000/api/token/obtain/',
        'token_refresh': 'http://127.0.0.1:8000/api/token/refresh/'
    }
    return Response(data=data, status=status.HTTP_200_OK)

# @api_view(POST) 
# def SignInView(request): 
#     username = request.data.get('username', None)
#     password = request.data.get('password', None)
#     user = User.objects.get(username=username)
#     if user is not None and check_password(password=password, encoded=user.password):
#         login(request=request, user=user)
#         return Response(status=status.HTTP_202_ACCEPTED)
#     else: return Response(data={'error_details': 'Invalid Credentials'}, status=status.HTTP_401_UNAUTHORIZED)


# @api_view(GET)
# def SignOutView(request):
#     try:
#         username = request.user.username
#         logout(request=request)
#         return Response(data={'details': f'{username} signed out'}, status=status.HTTP_200_OK)
#     except Exception as error:
#         return Response(data={'details': f'{username} sign out failed. {repr(error)}'}, status=status.HTTP_400_BAD_REQUEST)
