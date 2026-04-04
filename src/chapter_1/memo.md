
## 仕事とエネルギー

回転運動においては位置と運動量の外積あるいは力の外積がそれぞれ角運動量 $\boldsymbol{L}$ と力のモーメント $\boldsymbol{N}$ になることを述べた。

$$
    \boldsymbol{L}=\boldsymbol{r}\times\boldsymbol{P}、
    \boldsymbol{N}=\boldsymbol{r}\times\boldsymbol{F}
$$

一方でこれらの内積の方にはどのような意味を持つかを見てみることにする。そこで、まず角運動量の外積を内積に置き換えた量を時間微分してみると、

$$
    \frac{\mathrm{d}}{\mathrm{d}t}
    (\boldsymbol{r}\cdot\boldsymbol{p})=
    m
    \left(
        \boldsymbol{v}^2+
        \boldsymbol{r}\cdot
        \frac{\mathrm{d}\boldsymbol{v}}{\mathrm{d}t}
    \right)=
    m\boldsymbol{v}^2+
    \boldsymbol{r}\cdot\boldsymbol{F}
$$

というようになり特に意味がないように感じるが、これを踏まえて今度は $\boldsymbol{v}\cdot\boldsymbol{p}$ を時間微分してみると以下の通りになる。

$$
    \frac{\mathrm{d}}{\mathrm{d}t}
    (\boldsymbol{v}\cdot\boldsymbol{p})=
    2m
    \left(
        \boldsymbol{v}\cdot
        \frac{\mathrm{d}\boldsymbol{v}}{\mathrm{d}t}
    \right)=
    2\left(
        \boldsymbol{v}\cdot\boldsymbol{F}
    \right)
$$

これを整理すると、以下の式が得られる。

$$
    \frac{\mathrm{d}K}{\mathrm{d}t}=P、
    K=
    \frac{1}{2}
    \left(
        \boldsymbol{v}\cdot\boldsymbol{p}
    \right)、
    P=\boldsymbol{v}\cdot\boldsymbol{F}
$$

ここで $K$ は運動エネルギーと呼ばれ、以下の関係がある。

$$
    K=
    \frac{1}{2}
    \left(
        \boldsymbol{v}\cdot\boldsymbol{p}
    \right)=
    \frac{\boldsymbol{p}^2}{2m}=
    \frac{1}{2}m\boldsymbol{v}^2
$$