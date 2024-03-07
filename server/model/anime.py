# %% [markdown]
# ## Importing Files

# %%
from IPython.display import HTML 
import pandas as pd
import numpy as np
import random
import re
from nltk.corpus import stopwords
from sklearn.preprocessing import MinMaxScaler
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel
import pickle

# Load the dataset
anime = pd.read_csv("anime-dataset-2023.csv")

# %% [markdown]
# ## Feature Engineering

# %%
# Selecting important features for the recommendation system
'''
anime = anime[[
    'Score', 'Genres', 'Type', 'Episodes', 'Studios', 
    'Source', 'Rating', 'Popularity', 'Synopsis'
]]'''

anime[['Popularity', 'Score']] = anime[['Popularity', 'Score']].replace('UNKNOWN', np.nan)

# Drop rows with NaN values in 'Popularity' or 'Score' columns
anime = anime.dropna(subset=['Popularity', 'Score'])
anime.reset_index(drop=True, inplace=True)

# Display the shape of the cleaned dataset
print(anime.shape)

# %%
#anime.head()

# %%
# Generate a list of random indices
random_indices = random.sample(range(len(anime)), 10)

# Create a DataFrame containing the randomly selected rows
random_df = pd.concat([anime.iloc[index] for index in random_indices], axis=1).T

random_df = random_df.reset_index(drop=True)
print(random_df.shape)

# %%
def preprocess_text(text):
    cleaned_text = re.sub(r'[^a-zA-Z\s]', '', text)
    tokens = cleaned_text.split()
    lowercase_text = cleaned_text.lower()
    stopwords_set = set(stopwords.words('english'))
    words = lowercase_text.split()
    filtered_words = [word for word in words if word not in stopwords_set]
    return filtered_words

anime['Synopsis'] = anime['Synopsis'].apply(preprocess_text)

# %%
scaler = MinMaxScaler()
scaled = scaler.fit_transform(anime[['Popularity', 'Score']])
anime_rec = pd.DataFrame(data=scaled, columns=['Popularity', 'Score'])
anime_rec['Name'] = anime['Name']  # Add 'Name' column from 'anime' DataFrame

# Reorder columns if necessary
anime_rec = anime_rec[['Name', 'Popularity', 'Score']]
anime_rec.insert(loc=3, column='Synopsis', value=anime['Synopsis'])

# %%
tfidf = TfidfVectorizer(stop_words='english')
anime_rec['Synopsis'] = anime_rec['Synopsis'].fillna('')
tfidf_matrix = tfidf.fit_transform(anime_rec['Synopsis'])
print(tfidf_matrix.shape)

# %%
cosine_sim = linear_kernel(tfidf_matrix, tfidf_matrix)
indices = pd.Series(anime_rec.index, index=anime_rec['Name']).drop_duplicates()

# %%
# Function that takes in movie title as input and outputs most similar movies
def get_recommendations(title, cosine_sim=cosine_sim):
    # Get the index of the movie that matches the title
    idx = indices[title]

    # Get the pairwise similarity scores of all movies with that movie
    sim_scores = list(enumerate(cosine_sim[idx]))

    # Sort the movies based on the similarity scores
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)

    # Get the scores of the 10 most similar movies
    sim_scores = sim_scores[1:11]

    # Get the movie indices
    movie_indices = [i[0] for i in sim_scores]

    # Return the top 10 most similar movies
    return anime_rec['Name'].iloc[movie_indices]

# %%
# Example usage
get_recommendations('Trigun')

# %%
# Save the processed data and similarity matrix to pickle files
import pickle

# assuming 'model' is the variable holding your trained model
with open('example.pkl', 'wb') as file:
    pickle.dump(my_object, file)
    
new_data = anime.drop(columns=['Year of Release', 'Watch Time', 'Genre', 'Movie Rating', 'Metascore of movie', 'Director', 'Cast', 'Votes', 'Description'])
pickle.dump(new_data, open('movie_list.pkl', 'wb'))
pickle.dump(cosine_sim, open('similarity.pkl', 'wb'))