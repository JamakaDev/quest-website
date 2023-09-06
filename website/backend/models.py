from django.contrib.auth.models import AbstractUser
from django.db.models import BooleanField, CharField, DecimalField, FileField, ImageField, Model, TextField

# Verify enough space alloted for types field before appending ie. REMOTE = 6 chars
TYPES_CHOICES = (
    ('Prox Access Cards',       'CARD'),
    ('Barcode Decal Sticker',   'DECAL'),
    ('Prox Key Fob',            'FOB'),
    ('Prox Button Transmitter', 'REMOTE'),
    ('Prox RFID/UHF Tag',       'TAG')
)

STATES_CHOICES = (
    ('Alabama', 'AL'),
    ('Alaska', 'AK'),
    ('Arizona', 'AZ'),
    ('Arkansas', 'AR'),
    ('American Samoa', 'AS'),
    ('California', 'CA'),
    ('Colorado', 'CO'),
    ('Connecticut', 'CT'),
    ('Delaware', 'DE'),
    ('District of Columbia', 'DC'),
    ('Florida', 'FL'),
    ('Georgia', 'GA'),
    ('Guam', 'GU'),
    ('Hawaii', 'HI'),
    ('Idaho', 'ID'),
    ('Illinois', 'IL'),
    ('Indiana', 'IN'),
    ('Iowa', 'IA'),
    ('Kansas', 'KS'),
    ('Kentucky', 'KY'),
    ('Louisiana', 'LA'),
    ('Maine', 'ME'),
    ('Maryland', 'MD'),
    ('Massachusetts', 'MA'),
    ('Michigan', 'MI'),
    ('Minnesota', 'MN'),
    ('Mississippi', 'MS'),
    ('Missouri', 'MO'),
    ('Montana', 'MT'),
    ('Nebraska', 'NE'),
    ('Nevada', 'NV'),
    ('New Hampshire', 'NH'),
    ('New Jersey', 'NJ'),
    ('New Mexico', 'NM'),
    ('New York', 'NY'),
    ('North Carolina', 'NC'),
    ('North Dakota', 'ND'),
    ('Northern Mariana Islands', 'MP'),
    ('Ohio', 'OH'),
    ('Oklahoma', 'OK'),
    ('Oregon', 'OR'),
    ('Pennsylvania', 'PA'),
    ('Puerto Rico', 'PR'),
    ('Rhode Island', 'RI'),
    ('South Carolina', 'SC'),
    ('South Dakota', 'SD'),
    ('Tennessee', 'TN'),
    ('Texas', 'TX'),
    ('Trust Territories', 'TT'),
    ('Utah', 'UT'),
    ('Vermont', 'VT'),
    ('Virginia', 'VA'),
    ('Virgin Islands', 'VI'),
    ('Washington', 'WA'),
    ('West Virginia', 'WV'),
    ('Wisconsin', 'WI'),
    ('Wyoming', 'WY')
)

class User(AbstractUser):    
    ''' 
            USER-FIELDS
     --------------------------
    | username  |   password   |
     --------------------------
    |   email   |  first_name  |
     --------------------------
    | last_name | company_name |
     --------------------------
    |  address  |     city     |
     --------------------------
    |   state   | postal_code  |
     --------------------------

    '''
    company_name = CharField(max_length=64)
    address = CharField(max_length=32)
    city = CharField(max_length=64)
    state = CharField(max_length=32, choices=STATES_CHOICES)
    postal_code = CharField(max_length=10)

    def serialize(self):
        return {
            'first_name': self.first_name,
            'last_name': self.last_name,
            'username': self.username,
            'password': self.password,
            'email': self.email,
            'company_name': self.company_name,
            'address': self.address,
            'city': self.city,
            'state': self.state,
            'postal_code': self.postal_code
        }



class Product(Model):
    name = CharField(max_length=32)
    description = TextField()
    types = CharField(max_length=32, choices=TYPES_CHOICES)
    brand = CharField(max_length=32)    
    manufacture_number = CharField(max_length=32)
    part_number = CharField(max_length=32, blank=True)
    retail_price = DecimalField(max_digits=8, decimal_places=2)
    in_stock = BooleanField(default=True)
    image_path = CharField(max_length=128, blank=True)
    manual_path = CharField(max_length=128, blank=True)


    def serialize(self):
        return {
            "name": self.name,
            "description": self.description,
            "types": self.types,
            "brand": self.brand,
            "manufacture_number": self.manufacture_number,
            "part_number": self.part_number,
            "retail_price": self.retail_price,
            "in_stock": self.in_stock,
            "image_path": self.image_path,
            "manual_path": self.manual_path
        }

