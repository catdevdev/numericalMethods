# imports
from flask import Flask
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS, cross_origin
# routes
from routes import FirstAssignment
from routes import assignment_2
from routes import assignment_4


app = Flask(__name__)
api = Api(app)

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


api.add_resource(FirstAssignment.FirstAssignment, "/first_assignment")
api.add_resource(assignment_2.assignment_2, "/assignment_2")
api.add_resource(assignment_4.assignment_4, "/assignment_4")

if __name__ == "__main__":
    app.run(debug=True)
