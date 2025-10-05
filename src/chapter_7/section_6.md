
## 加速度系への座標変換について

　ここからは、等加速度運動している系同士での変換がどのようになるか見ていこう。例えば、今 $x$ 方向に一定加速度 $a$ で移動しているものとすると、

$$

    \frac{\mathrm{d}^2x}{\mathrm{d}t^2}=a、
    \frac{\mathrm{d}^2x'}{\mathrm{d}t'^2}=0、
    t'=t
$$

となるため、以下の関係が成り立つものと考えられる。

$$
    x'=x-\frac{1}{2}at^2=x-\frac{a}{2c^2}w^2、
    w'=w、
    (w=ct)
$$

これをLorentz変換のところでも見せた時空図で描写すると以下のようになる。
<p align="center">
    <img width="40%" src="images/const.png">
</p>
このことから、加速する座標への変換というのは曲がったものになることが予想される。この曲がった座標へ変換する理論としてRiemann幾何学というものがある。だが、この分野はかなり難解であるため、まずRiemann幾何学の記法について述べていくことにする。

　一般的に、ある地点の位置を指定するときはベクトルが用いられており、その中身は座標系を指定することで表すことができる。例えば、平面上の地点をベクトル $\bm{s}$ で表すとき座標系として二次元直交座標系 $(X,Y)$ を用いると $\bm{s}=(X,Y)$ となる。しかし、この表記だけだと二次元直交座標系かどうか判断ができない（二次元斜交座標系なども考えられる）ため、**基本ベクトル**（各成分の大きさ1のベクトル）というものが利用される。すなわち、二次元直交座標系の基本ベクトルを $\bm{e}_X,\bm{e}_Y$ として

$$
    \bm{s}=X\bm{e}_X+Y\bm{e}_Y、
    \bm{e}_X\cdot\bm{e}_X=1、
    \bm{e}_Y\cdot\bm{e}_Y=1、
    \bm{e}_X\cdot\bm{e}_Y=0
$$

というようにすると、$\bm{s}$ を表記できてなおかつ基本ベクトルの大きさが1で互いに直交している（直交座標系である）ことが分かる。同様に、二次元斜交座標系 $(x,y)$ において基本ベクトルを $\bm{e}_x,\bm{e}_y$ として

$$
    \bm{s}=x\bm{e}_x+y\bm{e}_y、
    \bm{e}_x\cdot\bm{e}_x=1、
    \bm{e}_y\cdot\bm{e}_y=1、
    \bm{e}_x\cdot\bm{e}_y=\frac{1}{\sqrt{2}}
$$

というようにすると、今度は互いに45度の角度をなす座標系になっていることが分かる。このことを踏まえて、今度は直交座標系から斜交座標系に変換することを考えると、ベクトル $\bm{s}$ について

$$
    \bm{s}=
    X\bm{e}_X+Y\bm{e}_Y=
    x\bm{e}_x+y\bm{e}_y
$$

というように表記を置き換えることになる。しかし、このままだと互いにどのような関係になっているか分からない（色々取りうる可能性がある）ため、例として以下の変換式に基づいて座標変換される場合を考えてみる。

<p align="center">
    <img width="40%" src="images/oblique_unit_vector.png">
    <img width="42%" src="images/oblique_system.png">
</p>

$$
    X = x+\frac{1}{\sqrt{2}}y、
    Y = \frac{1}{\sqrt{2}}y
    \ \leftrightarrow\ 
    x = X - Y、
    y = \sqrt{2}Y
$$

すると、先ほどのベクトル $\bm{s}$ の関係式に変換式を代入することで

$$
    \bm{s}=
    \left(
        x+\frac{1}{\sqrt{2}}y
    \right)
    \bm{e}_X+
    \frac{1}{\sqrt{2}}y\bm{e}_Y=
    x\bm{e}_X+
    y
    \left(
        \frac{1}{\sqrt{2}}\bm{e}_X+
        \frac{1}{\sqrt{2}}\bm{e}_Y
    \right)=
    x\bm{e}_x+y\bm{e}_y
$$
$$
    \bm{s}=
    \left(
        X-Y
    \right)
    \bm{e}_x+
    \sqrt{2}Y\bm{e}_y=
    X\bm{e}_x+
    Y
    \left(
        -\bm{e}_x+\sqrt{2}\bm{e}_y
    \right)=
    X\bm{e}_X+Y\bm{e}_Y
$$

というようになるため、比較すると以下の式が得られる。

$$
    \bm{e}_x=\bm{e}_X、
    \bm{e}_y=
    \frac{1}{\sqrt{2}}\bm{e}_X+
    \frac{1}{\sqrt{2}}\bm{e}_Y、
    \bm{e}_X=\bm{e}_x、
    \bm{e}_Y=-\bm{e}_x+\sqrt{2}\bm{e}_y
$$

この関係から、変換後の内積を求めてみると

$$
    \bm{e}_x\cdot\bm{e}_x=
    \bm{e}_X\cdot\bm{e}_X=1
$$
$$
    \bm{e}_y\cdot\bm{e}_y=
    \frac{1}{2}(\bm{e}_X\cdot\bm{e}_X)+
    (\bm{e}_X\cdot\bm{e}_Y)+
    \frac{1}{2}(\bm{e}_Y\cdot\bm{e}_Y)=1
$$
$$
    \bm{e}_x\cdot\bm{e}_y=
    \frac{1}{\sqrt{2}}(\bm{e}_X\cdot\bm{e}_X)+
    \frac{1}{\sqrt{2}}(\bm{e}_X\cdot\bm{e}_Y)=
    \frac{1}{\sqrt{2}}
$$

というように、内積に関して斜交座標系のものになっていることが分かる。このように、変換式を用いることで座標変換されるとともに変換前後の座標系の状態は基底ベクトルと内積によって確認できるものと予想される。そのため、先ほどの定加速度系での変換について考えてみると、変換前の直交座標系において

$$
    \bm{s}=x\bm{e}_x+w\bm{e}_w、
    \bm{e}_x\cdot\bm{e}_x=1、
    \bm{e}_w\cdot\bm{e}_w=1、
    \bm{e}_x\cdot\bm{e}_w=0
$$

となっているものして、変換後に

$$
    \bm{s}=
    x\bm{e}_x+w\bm{e}_w=
    x'\bm{e}_{x'}+w'\bm{e}_{w'}
$$

というようになっているものとする。ところが、ここで変換後の基本ベクトルが各地点で同じではないため、一概にこのような形で書けないという問題がでてきてしまう。そのため、各地点ごとに基本ベクトルがどうなっているかを見る必要が出てくる。そこで $\bm{s}$ を一般に

$$
    \bm{s}=\bm{s}(X,Y)=\bm{s}(x,y)
$$

というように変換されるものとして、この微小変化をとることで

$$
    \mathrm{d}\bm{s}=
    \left(
        \frac{\partial \bm{s}}{\partial X}
    \right)
    \mathrm{d}X+
    \left(
        \frac{\partial \bm{s}}{\partial Y}
    \right)
    \mathrm{d}Y=
    \left(
        \frac{\partial \bm{s}}{\partial x}
    \right)
    \mathrm{d}x+
    \left(
        \frac{\partial \bm{s}}{\partial y}
    \right)
    \mathrm{d}y
$$

と展開してみる。すると、基本ベクトルを利用した式と同じように各成分のベクトルの和になっていることが分かる。実際、$\bm{u}$ を基底ベクトル（大きさが1でない各成分のベクトル）として

$$
    \bm{u}_X=
    \frac{\partial \bm{s}}{\partial X}、
    \bm{u}_Y=
    \frac{\partial \bm{s}}{\partial Y}、
    \bm{u}_x=
    \frac{\partial \bm{s}}{\partial x}、
    \bm{u}_y=
    \frac{\partial \bm{s}}{\partial y}
$$

というように置くことで以下の形になることが分かる。

$$
    \mathrm{d}\bm{s}=
    \mathrm{d}X\bm{u}_X+
    \mathrm{d}Y\bm{u}_Y=
    \mathrm{d}x\bm{u}_x+
    \mathrm{d}y\bm{u}_y
$$

また、座標系間で変数が

$$
    X=X(x,y)、Y=Y(x,y)
    \leftrightarrow
    x=x(X,Y)、y=y(X,Y)
$$

というように変換式を満たしていることから、微小変化が

$$
    \mathrm{d}X=
    \left(
        \frac{\partial X}{\partial x}
    \right)
    \mathrm{d}x+
    \left(
        \frac{\partial X}{\partial y}
    \right)
    \mathrm{d}y、
    \mathrm{d}Y=
    \left(
        \frac{\partial Y}{\partial x}
    \right)
    \mathrm{d}x+
    \left(
        \frac{\partial Y}{\partial y}
    \right)
    \mathrm{d}y
$$
$$
    \mathrm{d}x=
    \left(
        \frac{\partial x}{\partial X}
    \right)
    \mathrm{d}X+
    \left(
        \frac{\partial x}{\partial Y}
    \right)
    \mathrm{d}Y、
    \mathrm{d}y=
    \left(
        \frac{\partial y}{\partial X}
    \right)
    \mathrm{d}X+
    \left(
        \frac{\partial y}{\partial Y}
    \right)
    \mathrm{d}Y
$$

であるため、$\mathrm{d}\bm{s}$ の関係式に代入すると

$$
    \mathrm{d}\bm{s}=
    \mathrm{d}X\bm{u}_X+
    \mathrm{d}Y\bm{u}_Y=
    \left[
        \left(
            \frac{\partial x}{\partial X}
        \right)
        \bm{u}_x+
        \left(
            \frac{\partial y}{\partial X}
        \right)
        \bm{u}_y
    \right]
    \mathrm{d}X+
    \left[
        \left(
            \frac{\partial x}{\partial Y}
        \right)
        \bm{u}_x+
        \left(
            \frac{\partial y}{\partial Y}
        \right)
        \bm{u}_y
    \right]
    \mathrm{d}Y
$$
$$
    \mathrm{d}\bm{s}=
    \left[
        \left(
            \frac{\partial X}{\partial x}
        \right)
        \bm{u}_X+
        \left(
            \frac{\partial Y}{\partial x}
        \right)
        \bm{u}_Y
    \right]
    \mathrm{d}x+
    \left[
        \left(
            \frac{\partial X}{\partial y}
        \right)
        \bm{u}_X+
        \left(
            \frac{\partial Y}{\partial y}
        \right)
        \bm{u}_Y
    \right]
    \mathrm{d}y=
    \mathrm{d}x\bm{u}_x+
    \mathrm{d}y\bm{u}_y
$$


となるため、比較すると以下の関係式が得られる。

$$
    \bm{u}_X=
    \frac{\partial x}{\partial X}
    \bm{u}_x+
    \frac{\partial y}{\partial X}
    \bm{u}_y、
    \bm{u}_Y=
    \frac{\partial x}{\partial Y}
    \bm{u}_x+
    \frac{\partial y}{\partial Y}
    \bm{u}_y
$$
$$
    \bm{u}_x=
    \frac{\partial X}{\partial x}
    \bm{u}_X+
    \frac{\partial Y}{\partial x}
    \bm{u}_Y、
    \bm{u}_y=
    \frac{\partial X}{\partial y}
    \bm{u}_X+
    \frac{\partial Y}{\partial y}
    \bm{u}_Y
$$

この関係式が正しいかは、次のように展開してみることで確認できる。

$$
    \bm{u}_X=
    \frac{\partial \bm{s}}{\partial X}=
    \frac{\partial x}{\partial X}
    \frac{\partial \bm{s}}{\partial x}+
    \frac{\partial y}{\partial X}
    \frac{\partial \bm{s}}{\partial y}=
    \frac{\partial x}{\partial X}
    \bm{u}_x+
    \frac{\partial y}{\partial X}
    \bm{u}_y
$$
$$
    \bm{u}_Y=
    \frac{\partial \bm{s}}{\partial Y}=
    \frac{\partial x}{\partial Y}
    \frac{\partial \bm{s}}{\partial x}+
    \frac{\partial y}{\partial Y}
    \frac{\partial \bm{s}}{\partial y}=
    \frac{\partial x}{\partial Y}
    \bm{u}_x+
    \frac{\partial y}{\partial Y}
    \bm{u}_y
$$
$$
    \bm{u}_x=
    \frac{\partial \bm{s}}{\partial x}=
    \frac{\partial X}{\partial x}
    \frac{\partial \bm{s}}{\partial X}+
    \frac{\partial Y}{\partial x}
    \frac{\partial \bm{s}}{\partial Y}=
    \frac{\partial X}{\partial x}
    \bm{u}_X+
    \frac{\partial Y}{\partial x}
    \bm{u}_Y
$$
$$
    \bm{u}_y=
    \frac{\partial \bm{s}}{\partial y}=
    \frac{\partial X}{\partial y}
    \frac{\partial \bm{s}}{\partial X}+
    \frac{\partial Y}{\partial y}
    \frac{\partial \bm{s}}{\partial Y}=
    \frac{\partial X}{\partial y}
    \bm{u}_X+
    \frac{\partial Y}{\partial y}
    \bm{u}_Y
$$

これは基底ベクトルの変換になっているため、例として直交座標系から斜交座標系に変換した場合どうなるか見てみると

$$
    X = x+\frac{1}{\sqrt{2}}y、
    Y = \frac{1}{\sqrt{2}}y
    \rightarrow
    \frac{\partial X}{\partial x}=1、
    \frac{\partial Y}{\partial x}=0、
    \frac{\partial X}{\partial y}=\frac{1}{\sqrt{2}}、
    \frac{\partial Y}{\partial y}=\frac{1}{\sqrt{2}}
$$

$$
    x = X - Y、
    y = \sqrt{2}Y
    \rightarrow
    \frac{\partial x}{\partial X}=1、
    \frac{\partial y}{\partial X}=0、
    \frac{\partial x}{\partial Y}=-1、
    \frac{\partial y}{\partial Y}=\sqrt{2}
$$

となることから、以下のような式が得られる。

$$
    \bm{u}_X=\bm{u}_x、
    \bm{u}_Y=
    -\bm{u}_x+\sqrt{2}\bm{u}_y、
    \bm{u}_x=\bm{u}_X、
    \bm{u}_y=
    \frac{1}{\sqrt{2}}\bm{u}_X+
    \frac{1}{\sqrt{2}}\bm{u}_Y
$$

また、このときのベクトル $\bm{s}$ は基本ベクトルを用いて

$$
    \bm{s}=
    X\bm{e}_X+Y\bm{e}_Y=
    x\bm{e}_x+y\bm{e}_y
$$

と書ける（**基本ベクトルが位置によって変わらない**）ことから、この偏微分をとることで

$$
    \bm{u}_X=
    \frac{\partial \bm{s}}{\partial X}=
    \bm{e}_X、
    \bm{u}_Y=
    \frac{\partial \bm{s}}{\partial Y}=
    \bm{e}_Y、
    \bm{u}_x=
    \frac{\partial \bm{s}}{\partial x}=
    \bm{e}_x、
    \bm{u}_y=
    \frac{\partial \bm{s}}{\partial y}=
    \bm{e}_y
$$

といように基底ベクトルと基本ベクトルが同じものとなる。一方で、定加速度系については、変換後については基本ベクトルが各地点で同じにならないことから、以下の変換前の式しか成り立たないことになる。

$$
    \bm{s}=x\bm{e}_x+y\bm{e}_y、
    \bm{u}_x=\bm{e}_x、
    \bm{u}_y=\bm{e}_y
$$

そのため、まず基底ベクトルを

$$
    x=x'+\frac{a}{2c^2}w'^2、
    w=w'
    \rightarrow
    \frac{\partial x}{\partial x'}=1、
    \frac{\partial w}{\partial x'}=0、
    \frac{\partial x}{\partial w'}=\frac{a}{c^2}w'、
    \frac{\partial w}{\partial w'}=1
$$

$$
    x'=x-\frac{a}{2c^2}w^2、
    w'=w
    \rightarrow
    \frac{\partial x'}{\partial x}=1、
    \frac{\partial w'}{\partial x}=0、
    \frac{\partial x'}{\partial w}=-\frac{a}{c^2}w、
    \frac{\partial w'}{\partial w}=1
$$

を利用して求めてみると、以下のような関係式が得られる。

$$
    \bm{u}_x=\bm{u}_{x'}、
    \bm{u}_w=
    -\frac{a}{c^2}w'
    \bm{u}_{x'}+
    \bm{u}_{w'}、
    \bm{u}_{x'}=\bm{u}_x、
    \bm{u}_{w'}=
    \frac{a}{c^2}w
    \bm{u}_x+\bm{u}_w
$$

そして、これから変換後の内積を求めると

$$
    \bm{u}_{x'}\cdot\bm{u}_{x'}=1、
    \bm{u}_{w'}\cdot\bm{u}_{w'}=
    1+\frac{a^2}{c^4}w'^2、
    \bm{u}_{x'}\cdot\bm{u}_{w'}=
    \frac{a}{c^2}w'
$$

というように、 $w'$ については $w'=0$ では基底ベクトルは基本ベクトルとなっているが、それ以外では別の値になることが分かる。あるいは、微小変位ベクトルを


$$
    \mathrm{d}\bm{s}=
    \mathrm{d}x\bm{u}_x+
    \mathrm{d}w\bm{u}_w=
    \mathrm{d}{x'}\bm{u}_{x'}+
    \mathrm{d}{w'}\bm{u}_{w'}
$$

として、この内積を求めると

$$
    \begin{aligned}
        \mathrm{d}\bm{s}\cdot\mathrm{d}\bm{s}
        &=
        (\bm{u}_x\cdot\bm{u}_x)
        \mathrm{d}x\mathrm{d}x+
        (\bm{u}_x\cdot\bm{u}_w)
        \mathrm{d}x\mathrm{d}w+
        (\bm{u}_w\cdot\bm{u}_x)
        \mathrm{d}w\mathrm{d}x+
        (\bm{u}_w\cdot\bm{u}_w)
        \mathrm{d}w\mathrm{d}w\\
        &=
        (\bm{u}_{x'}\cdot\bm{u}_{x'})
        \mathrm{d}{x'}\mathrm{d}{x'}+
        (\bm{u}_{x'}\cdot\bm{u}_{w'})
        \mathrm{d}{x'}\mathrm{d}{w'}+
        (\bm{u}_{w'}\cdot\bm{u}_{x'})
        \mathrm{d}{w'}\mathrm{d}{x'}+
        (\bm{u}_{w'}\cdot\bm{u}_{w'})
        \mathrm{d}{w'}\mathrm{d}{w'}
    \end{aligned}
$$

であるから、これに変換前の内積の関係と変換式を代入すると


$$
        \mathrm{d}\bm{s}\cdot\mathrm{d}\bm{s}=
        \mathrm{d}x\mathrm{d}x+
        \mathrm{d}w\mathrm{d}w=
        \mathrm{d}{x'}\mathrm{d}{x'}+
        2\frac{a}{c^2}w'
        \mathrm{d}{x'}\mathrm{d}{w'}+
        \left(
            1+\frac{a^2}{c^4}w'^2
        \right)
        \mathrm{d}{w'}\mathrm{d}{w'}
$$

であるから比較することで、先ほどの内積の関係が得られる。

ここまでのことを踏まえて、一般的に座標系 $(x_1,x_2,\cdots,x_N)$ から座標系 $(x'_1,x'_2,\cdots,x'_{N'})$ に変換することを考えると、その間ではベクトル $\bm{s}$ の微小変位が基底ベクトル $\bm{u}$
 により
 
$$
    \mathrm{d}\bm{s}=
    \sum_{i=1}^{N}
    \mathrm{d}x_{i}\bm{u}_i=
    \sum_{j=1}^{N'}
    \mathrm{d}x'_{j}\bm{u}'_j、
    
$$
$$
    \mathrm{d}\bm{s}\cdot\mathrm{d}\bm{s}=
    (\mathrm{d}\bm{s})^2=
    \sum_{i=1}^{N}
    \sum_{j=1}^{N}
    (\bm{u}_i\cdot\bm{u}_j)
    \mathrm{d}x_{i}\mathrm{d}x_{j}=
    \sum_{i=1}^{N'}
    \sum_{j=1}^{N'}
    (\bm{u}'_i\cdot\bm{u}'_j)
    \mathrm{d}x'_{i}\mathrm{d}x'_{j}
$$


という関係が成り立つことになる。ただ、ここでの変換の仕方というのはベクトル成分と基底ベクトルの二通りあり、

$$
    \mathrm{d}x_{i}=
    \sum_{k=1}^{N'}
    \left(
        \frac{\partial x_{i}}{\partial x'_{k}}
    \right)
    \mathrm{d}x'_{k}、
    \mathrm{d}x'_{i}=
    \sum_{k=1}^{N}
    \left(
        \frac{\partial x'_{i}}{\partial x_{k}}
    \right)
    \mathrm{d}x_{k}
$$
$$
    \bm{u}_i=
    \sum_{k=1}^{N'}
    \left(
        \frac{\partial x'_{k}}{\partial x_{i}}
    \right)
    \bm{u}'_k、
    \bm{u}'_j=
    \sum_{l=1}^{N}
    \left(
        \frac{\partial x_{l}}{\partial x'_{j}}
    \right)
    \bm{u}_l
$$

というようになっているが、よく見ると係数の偏微分が分母と分子がそれぞれ逆になっていることが見て取れる。座標変換による変換というのは、この二つに大別されており、基底ベクトルと同じ変換を受けるベクトルのことを**共変ベクトル**、それとは逆の変換をするベクトルを**反変ベクトル**というように呼ぶ。次回では具体的に、これらのベクトルの観点からどのように座標変換が記述されるか見ていくことにする。