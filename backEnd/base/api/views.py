from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from django.http import JsonResponse
from ..models import Notes
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User


from .serializers import *


@api_view(['GET'])
def get_routes(request):
    routes = [
        '/api/token',
        '/api/token/refresh',
        '<str:username>/notes/',
    ]
    return Response(routes)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def notes_view(request, username):
    # r_user = request.user
    # print('<<<<<<<<<<<>>>>>>>>>>>>>>>>>')
    # print('user in request',r_user)
    # print('user in function',username)
    # notes = Notes.objects.filter(username=username)
    notes = User.objects.get(username=username).notes_set.all()
    # print(notes)
    # print('<<<<<<<<<<<>>>>>>>>>>>>>>>>>')
    serialized_notes = NoteSerializer(notes, many=True)
    return Response(serialized_notes.data)
