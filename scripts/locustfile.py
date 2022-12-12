from locust import TaskSet, HttpUser


def say(params):
    print("say")


def sing(params):
    print("sing")


class TaskTest(TaskSet):
    tasks = [say, sing]


class RunUser(HttpUser):
    # Task_set = TaskTest
    tasks = [TaskTest]
    host = "http://192.168.0.1"

