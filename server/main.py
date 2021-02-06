# imports
from flask import Flask
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS, cross_origin
# routes
from routes import FirstAssignment


app = Flask(__name__)
api = Api(app)

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


api.add_resource(FirstAssignment.FirstAssignment, "/first_assignment")

if __name__ == "__main__":
    app.run(debug=True)
