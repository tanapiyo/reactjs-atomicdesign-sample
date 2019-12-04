参考：https://qiita.com/kimihiro_n/items/86e0a9e619720e57ecd8
（pip install -U markdown）

```requirements.txt
pip install django
pip install djangorestframework
pip install django-filter 
```
```
django-admin startproject <アプリ名>
python manage.py startapp <子アプリ名>
```

## 手順
- models.pyかく
- setting.pyにアプリと'rest_framework'を追加する

```
python manage.py makemigrations
python manage.py migrate
```
```
# admin用のユーザー作成
python manage.py createsuperuser
# 開発サーバーを起動
python manage.py runserver
```
- このadminユーザはテーブルとかの管理用（/adminで管理）
- アプリのadmin.pyにergisterすれば管理できるようになるよ

## RestAPI
- Serializer
    - serializer.pyにどのモデルのなにをAPIで渡すかかく
    ```python
    class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('name', 'mail')
    ```
- ViewSet
    - view.pyで、クエリとserializerを渡す（モデルごと）
    ```python
    class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    ```
- URL pattern
    - url.pyの、一番親のと、アプリの下のこまかい設定

### 参考
- Serializer
https://note.crohaco.net/2018/django-rest-framework-serializer/
- Viewの切り方
https://note.crohaco.net/2018/django-rest-framework-view/

