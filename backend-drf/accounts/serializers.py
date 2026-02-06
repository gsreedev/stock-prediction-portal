from django.contrib.auth.models import User
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only = True,min_length=8, style={'input_type':'password'}) #Should not be retrieved from the GET request
    class Meta:
        model = User
        fields = ['username','email','password']

    def create(self,validated_data): #serializers will automatically validate the data you have entered in the form
        user = User.objects.create_user(
                validated_data['username'],
                validated_data['email'],
                validated_data['password']
            )
            #User.objects.create = save the password in plain text
            #User.objects.create_user = automatically hash the password
        # user = User.objects.create_user(**validated_data)
        return user