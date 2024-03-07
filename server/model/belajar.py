from sklearn.metrics.pairwise import cosine_similarity
similarity = cosine_similarity(vectors)
movies[movies['title']=="Avatar"]

def Recommendation_system(movie):
    movie_index = movies[movies['title']== movie].index[0]
    distances = sorted(list(enumerate(similarity[0])),reverse=True,key=lambda x:x[1])
    for i in distances[1:20]:
        print(movies.iloc[i[0]].title)
        
import pickle
pickle.dump(movies, open('model.pkl','wb'))
pickle.dump(similarity, open('similarity’,'wb'))