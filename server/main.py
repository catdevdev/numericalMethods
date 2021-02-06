# imports
from flask import Flask
from flask_restful import Api, Resource, reqparse
# math imports
from sympy import *
# routes
from routes import FirstAssignment


app = Flask(__name__)
api = Api(app)


api.add_resource(FirstAssignment.FirstAssignment, "/first_assignment")

if __name__ == "__main__":
    app.run(debug=True)
