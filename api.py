import requests

query = input('Query for anime: ')

response = requests.get(f'https://api.jikan.moe/v4/anime?q={query}').json()
for data in response['data']:
    print(data['title'])
