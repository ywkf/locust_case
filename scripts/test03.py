from locust import TaskSet, HttpUser


def login(self):
    r = self.client.post(url="/bms/login", json={"username": "admin", "password": "123456"})
    print(r.json())
    print("login...")


def index(self):
    r = self.client.get(url="/bms/index")
    print(r.text)


def user_info(self):
    r = self.client.get(url="/bms/profile")
    print(r.json())


def logout(self):
    r = self.client.post(url="/bms/logout")
    print(r.json())
    print("logout...")


class TaskTest(TaskSet):
    tasks = {index: 10, user_info: 1}

    def on_start(self):
        login(self)

    def on_stop(self):
        logout(self)


class RunUser(HttpUser):
    tasks = [TaskTest]
    host = "http://localhost:9090"
    min_wait = 1000
    max_wait = 2000
    weight = 10
