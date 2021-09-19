# hypolistjson
気象庁の震源リストをJSONに変換
## リンク
https://raw.githubusercontent.com/iku55/hypolistjson/main/data/[日付].json  
日付の例: 20210918
## 更新頻度
今日の日付の1日前の震源リストのページを1時間ごとにチェックし、JSONに変換しています。  
(もしかしたら2時間ごとにするかも)
## 構造
```
[
  {
    "date": "2021-08-18T15:03:31.100Z", #時間
    "latitude": "28.212", #緯度(南緯)
    "longitude": "129.331", #経度(東経)
    "depth": "25", #深さ
    "magnitude": "0.7", #マグニチュード
    "name": "奄美大島近海" #震央地名
  },
  ...
]
```
