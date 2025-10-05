
## 共変ベクトルと反変ベクトル

　ベクトル成分と基底ベクトルで変換の係数が逆になることを述べたが、これに関しての説明を分かりやすいよう今度は直交座標系 $(x,y)$ を角度 $\alpha$ だけ回転した座標系 $(x',y')$ に変換した場合を考えてみよう。

<p align="center">
    <img width="40%" src="images/rotate_before.png">　　　
    <img width="22%" src="images/rotate_after.png">
</p>

まず、直交座標系において極座標 $(r,\theta)$ を用いると

$$
    x=r\cos\theta、
    y=r\sin\theta
$$

と書けるため、これを角度 $\alpha$ だけ回転すると

$$
    x'=r\cos(\theta-\alpha)=
    r\cos\theta\cos\alpha+r\sin\theta\sin\alpha=
    x\cos\alpha+y\sin\alpha
$$
$$
    y'=r\sin(\theta-\alpha)=
    r\sin\theta\cos\alpha-r\cos\theta\sin\alpha=
    y\cos\alpha-x\sin\alpha
$$

となり、これから逆変換を求めると以下の通りになる。

$$
    x=x'\cos\alpha-y'\sin\alpha、
    y=y'\cos\alpha+x'\sin\alpha
$$

このことから、偏微分については

$$
    \frac{\partial x'}{\partial x}=
    \cos\alpha、
    \frac{\partial x'}{\partial y}=
    \sin\alpha、
    \frac{\partial y'}{\partial x}=
    -\sin\alpha、
    \frac{\partial y'}{\partial y}=
    \cos\alpha
$$
$$
    \frac{\partial x}{\partial x'}=
    \cos\alpha、
    \frac{\partial x}{\partial y'}=
    -\sin\alpha、
    \frac{\partial y}{\partial x'}=
    \sin\alpha、
    \frac{\partial y}{\partial y'}=
    \cos\alpha
$$

となることから、成分ベクトルと基底ベクトルの変換式は以下の通りとなる。

$$
    \mathrm{d}x'=
    \cos\alpha\ \mathrm{d}x+\sin\alpha\ \mathrm{d}y、
    \mathrm{d}y'=
    -\sin\alpha\ \mathrm{d}x+\cos\alpha\ \mathrm{d}y
$$
$$
    \bm{u}_x'=
    \cos\alpha\ \bm{u}_x+\sin\alpha\ \bm{u}_y、
    \bm{u}_y'=
    -\sin\alpha\ \bm{u}_x+\cos\alpha\ \bm{u}_y
$$

ここで回転座標系ではどちらの変換も同じになっていることが分かる。























　ある二つの座標系において座標変換が行われたときに、ベクトルは以下の通り変換の方法によって二通りに分けられる。

$$
    \begin{cases}
        ・\bm{a}=(a_1,a_2,\cdots,a_N)&：共変ベクトル（下付き添え字で区別）\\
        ・\bm{b}=(b^1,b^2,\cdots,b^{N})&：反変ベクトル（上付き添え字で区別）
    \end{cases}
$$

これらのベクトルは、座標系 $(x^1,x^2,\cdots,x^N)$ から座標系 $(x'^1,x'^2,\cdots,x'^{N'})$ に変換した場合、

$$
    a'_i=
    \sum_{j=1}^N
    \alpha_{i}^{j}
    a_j、
    \alpha_{i}^{j}=
    \left(
        \frac{\partial x'^j}{\partial x^i}
    \right)、
    b'^i=
    \sum_{j=1}^N
    \beta_{j}^{i}
    b^j、
    \beta_{i}^{j}=
    \left(
        \frac{\partial x^i}{\partial x'^j}
    \right)
$$

というような変換式に従う。同じように、微小ベクトル $\mathrm{d}\bm{s}$ についても以下のようになる。

$$
    \mathrm{d}\bm{s}=
    \sum_{i=1}^{N}
    \mathrm{d}x^{i}\bm{u}_i=
    \sum_{j=1}^{N'}
    \mathrm{d}x'^{j}\bm{u}'_j、
    
$$
$$
    (\mathrm{d}\bm{s})^2=
    \sum_{i=1}^{N}
    \sum_{j=1}^{N}
    (\bm{u}_i\cdot\bm{u}_j)
    \mathrm{d}x^{i}\mathrm{d}x^{j}=
    \sum_{i=1}^{N'}
    \sum_{j=1}^{N'}
    (\bm{u}'_i\cdot\bm{u}'_j)
    \mathrm{d}x'^{i}\mathrm{d}x'^{j}
$$







座標回転したときに、それは図にあるようにベクトルのほうは逆回転しているように見える。


ただ、力についてはポテンシャルの偏微分で書けたりすることもあり、判別できないかもしれない。

　

ここまでで上付き文字と下付き文字が同じ添え字がついているものというのは決まって総和になっていることから、よく省略（**Einsteinの縮約記法**）される。

$$
    \mathrm{d}\bm{s}=
    \mathrm{d}x^{i}\bm{u}_i=
    \mathrm{d}x'^{j}\bm{u}'_j、
    (\mathrm{d}\bm{s})^2=
    (\bm{u}_i\cdot\bm{u}_j)
    \mathrm{d}x^{i}\mathrm{d}x^{j}=
    (\bm{u}'_i\cdot\bm{u}'_j)
    \mathrm{d}x'^{i}\mathrm{d}x'^{j}
$$

また、基底ベクトル同士の内積というのは座標系の各地点の形状を示す重要な量となっており、

$$
    g_{ij}=\bm{u}_i\cdot\bm{u}_j、
    g'_{ij}=\bm{u}'_i\cdot\bm{u}'_j
$$

というように、一般に**Riemann計量**と呼ばれている。そのため、内積のほうも以下のように表記される。

$$
    (\mathrm{d}\bm{s})^2=
    g_{ij}
    \mathrm{d}x^{i}\mathrm{d}x^{j}=
    g'_{ij}
    \mathrm{d}x'^{i}\mathrm{d}x'^{j}
$$

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