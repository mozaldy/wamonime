from flask import Flask, redirect, render_template, request, session
import requests


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
