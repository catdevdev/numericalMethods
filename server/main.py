# imports
from flask import Flask
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS, cross_origin
# routes
from routes import assignment_1
from routes import assignment_2
from routes import assignment_4
from routes import assignment_6


app = Flask(__name__)
api = Api(app)

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


api.add_resource(assignment_1.FirstAssignment, "/first_assignment")
api.add_resource(assignment_2.assignment_2, "/assignment_2")
api.add_resource(assignment_4.assignment_4, "/assignment_4")
api.add_resource(assignment_6.route, "/assignment_6")

if __name__ == "__main__":
    app.run(debug=True)
