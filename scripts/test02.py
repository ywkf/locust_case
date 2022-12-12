from locust import TaskSet, HttpUser, task, SequentialTaskSet, between


class TaskTest(SequentialTaskSet):

    # tasks = [login, index, user, logout]

    @task
    def login(self):
        r = self.client.post(url="/bms/login", json={"username": "admin", "password": "123456"})
        print(r.json())

    @task
    def index(self):
        r = self.client.get(url="/bms/index")
        print(r.text)

    @task
    def user_info(self):
        r = self.client.get(url="/bms/profile")
        print(r.json())

    @task
    def logout(self):
        r = self.client.post(url="/bms/logout")
        print(r.json())


class RunUser(HttpUser):
    tasks = [TaskTest]
    host = "http://localhost:9090"
    # min_wait = 1000
    # max_wait = 2000
