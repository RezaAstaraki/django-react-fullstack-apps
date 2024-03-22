from rest_framework.decorators import api_view,permission_classes
from rest_framework.response import Response
from django.http import JsonResponse
from ..models import Notes
from rest_framework.permissions import IsAuthenticated



from .serializers import *


@api_view(['GET'])
def get_routes(request):
    routes = [
        '/api/token',
        '/api/token/refresh'
    ]
    return Response(routes)



@api_view(['GET'])
@permission_classes([IsAuthenticated])
def notes_view(request,user):
    r_user = request.user
    print('<<<<<<<<<<<>>>>>>>>>>>>>>>>>')
    print('user in request',r_user)
    print('user in function',user)
    notes = Notes.objects.filter(user=user)
    print(notes)
    print('<<<<<<<<<<<>>>>>>>>>>>>>>>>>')
    serialized_notes = NoteSerializer(notes,many=True)
    return Response(serialized_notes.data)
