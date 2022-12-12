from locust import TaskSet, HttpUser, task

"""
    locust 分布式：
        1. 主机（控制机） --master
        2. 从属主机（执行机） --worker --master-host=主机ip
    
    locust 命令行分布式：
        --headless：不使用web界面
        -u：虚拟用户数
        -r：每秒孵化率
        --expect-workers：执行机数量
        --run-time：运行时间（h：小时 m：分钟 s：秒）
        --csv=：保存执行结果
"""


class TaskTest(TaskSet):

    # tasks = {index: 10, user_info: 1}

    def login(self):
        r = self.client.post(url="/bms/login", json={"username": "admin", "password": "123456"})
        print(r.json())
        print("login...")

    @task(10)
    def index(self):
        r = self.client.get(url="/bms/index")
        print(r.text)

    @task(1)
    def user_info(self):
        r = self.client.get(url="/bms/profile")
        print(r.json())

    def logout(self):
        r = self.client.post(url="/bms/logout")
        print(r.json())
        print("logout...")

    def on_start(self):
        self.login()

    def on_stop(self):
        self.logout()


class RunUser(HttpUser):
    tasks = [TaskTest]
    host = "http://localhost:9090"
    min_wait = 1000
    max_wait = 2000
    weight = 10
