
## 仕事とエネルギー

回転運動においては位置と運動量の外積あるいは力の外積がそれぞれ角運動量 $\bm{L}$ と力のモーメント $\bm{N}$ になることを述べた。

$$
    \bm{L}=\bm{r}\times\bm{P}、
    \bm{N}=\bm{r}\times\bm{F}
$$

一方でこれらの内積の方にはどのような意味を持つかを見てみることにする。そこで、まず角運動量の外積を内積に置き換えた量を時間微分してみると、

$$
    \frac{\mathrm{d}}{\mathrm{d}t}
    (\bm{r}\cdot\bm{p})=
    m
    \left(
        \bm{v}^2+
        \bm{r}\cdot
        \frac{\mathrm{d}\bm{v}}{\mathrm{d}t}
    \right)=
    m\bm{v}^2+
    \bm{r}\cdot\bm{F}
$$

というようになり特に意味がないように感じるが、これを踏まえて今度は $\bm{v}\cdot\bm{p}$ を時間微分してみると以下の通りになる。

$$
    \frac{\mathrm{d}}{\mathrm{d}t}
    (\bm{v}\cdot\bm{p})=
    \frac{\mathrm{d}}{\mathrm{d}t}
    (m\bm{v}^2)=
    2m
    \left(
        \bm{v}\cdot
        \frac{\mathrm{d}\bm{v}}{\mathrm{d}t}
    \right)=
    2\left(
        \bm{v}\cdot\bm{F}
    \right)
$$

これを整理すると、以下の式が得られる。

$$
    \frac{\mathrm{d}}{\mathrm{d}t}
    \left(
        \frac{1}{2}
        \bm{v}\cdot\bm{p}
    \right)=
    \frac{\mathrm{d}}{\mathrm{d}t}
    \left(
        \frac{1}{2}m\bm{v}^2
    \right)=
    \bm{v}\cdot\bm{F}
$$