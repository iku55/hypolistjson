# hypolistjson
気象庁の震源リストをJSONに変換
## リンク
https://raw.githubusercontent.com/iku55/hypolistjson/main/data/[日付].json  
日付の例: 20210918
## 更新頻度
今日の日付の2日前の震源リストのページを1時間ごとにチェックし、JSONに変換しています。  
(もしかしたら2時間ごとにするかも)
## 構造
```
[
  {
    "time": "2021-09-17T00:00:38.0+09:00", #時間(日本時間)
    "latitude": "35.274", #緯度(南緯)
    "longitude": "138.569", #経度(東経)
    "depth": "24", #深さ
    "magnitude": "0.8", #マグニチュード
    "name": "山梨県東部・富士五湖" #震央地名
  },
  ...
]
```
