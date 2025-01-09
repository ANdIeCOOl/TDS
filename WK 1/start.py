#Q7
# from datetime import datetime, timedelta

# start, end = datetime(1985,12,25), datetime(2013,1,11)
# days = (start + timedelta(days=i) for i in range((end - start).days + 1))
# l = [d for d in days if d.weekday() in [2] ]
# print(len(l))

#q9
import json
json_str = """
[{"name":"Alice","age":42},
{"name":"Bob","age":94},
{"name":"Charlie","age":96},
{"name":"David","age":18},
{"name":"Emma","age":35},
{"name":"Frank","age":69},
{"name":"Grace","age":75},
{"name":"Henry","age":2},{"name":"Ivy","age":8},
{"name":"Jack","age":49},{"name":"Karen","age":8},
{"name":"Liam","age":16},{"name":"Mary","age":97},
{"name":"Nora","age":10},{"name":"Oscar","age":11},
{"name":"Paul","age":67}]"""
data = json.loads(json_str)

import pandas as pd
df = pd.DataFrame(data)
df2 = df.sort_values(by=["age","name"])
data = df2.to_json(orient='records')
print(data)