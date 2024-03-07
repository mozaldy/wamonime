from flask import Flask, redirect, render_template, request, session
import requests
import pickle

# loading models

# movies = pd.read_csv('movies.csv')

movies = pickle.load(open('dict.pkl', 'rb'))
similarity = pickle.load(open('similarity.pkl', 'rb'))

def fetch_poster(movie_id):
    url = "".format(movie_id)
    data = request.get(url)
    data = data.json()
    poster_path = data['']
app = Flask(__name__)
app.config["TEMPLATES_AUTO_RELOAD"] = True

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/search')
def search():
    query = request.args.get('name', 'foo')

    response = requests.get(f'https://api.jikan.moe/v4/anime?q={query}').json()
    data = response['data']
    return render_template('anime.html', data=data, query=query)

@app.route('/about')
def about():
    return render_template('about.html')

if __name__ == "__main__":
    app.run(debug = True)