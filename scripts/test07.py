import os


def get_mem_data():
    data = os.popen("adb shell dumpsys meminfo com.xxx")
    for line in data:
        if "TOTAL" in line:
            print(line)


if __name__ == "__main__":
    get_mem_data()


