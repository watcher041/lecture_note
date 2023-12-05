
## 正準集団


　ここまでが集団を孤立系とした場合の説明であるが、実際のところ孤立系というのは現実にはなく最低でも熱のやり取りをしていることが多い。そのため、以下の図ような系を考えてみる。

<p align="center">
    <img width="60%"
        src="images/hot_bath.png">
</p>

ここでの熱浴系の状態を見てみると、熱力学第一法則において
$$
    \mathrm{d}U=
    \mathrm{d}'Q+\mathrm{d}'W=
    \mathrm{d}'Q
$$
となるわけだが、先ほどと異なりエネルギーが一定とならないため状態数を求めることができない。そこで、あるエネルギーをとる確率を出してみる。
$$
    P(U)=
    \frac{\mathcal{W}(U_t-U)
    \mathcal{W}(U)}{\mathcal{W}(U_t)}
$$
$$
    S(U_t-U)\simeq S(U_t)-
    \left(
        \frac{\partial S}{\partial U}    
    \right)U=
    S(U_t)-\frac{U}{T}
$$
$$
    k_{\mathrm{B}}\ln
    \mathcal{W}(U_t-U)=
    k_{\mathrm{B}}\ln
    \mathcal{W}(U_t)e^{-U/k_{\mathrm{B}}T}
$$

これは見方を変えると
$$
    \frac{m}{2}
    \left(
    \frac{1}{3N}
    \sum_{i=1}^{3N}v_{i}^2
    \right)=
    \frac{1}{2}k_{\mathrm{B}}T
    \rightarrow
    \braket{v^2}=
    \frac{k_\mathrm{B}T}{m}
$$
と一つの成分の速度の二乗平均が求められる。すなわち、以下の通りの関係式が得られる。
$$
    PV=M\braket{v_{\perp}^2}
    \rightarrow
    PV=Nk_\mathrm{B}T
$$


正準集団



$$
    Z=
    \int\cdots\int
    e^{-\frac{\beta m}{2}
    (v_1^2+\cdots+v_{3N}^2) }
    \mathrm{d}v_1\cdots\mathrm{d}v_{3N}
$$

$$
    \braket{v^2}=
    \frac{1}{Z}
    \int\cdots\int
    v^2
    e^{-\frac{\beta m}{2}
    (v_1^2+\cdots+v_{3N}^2) }
    \mathrm{d}v_1\cdots\mathrm{d}v_{3N}=
    \frac{f(\beta)}{g(\beta)}=
    \frac{1}{\beta m}、
$$
$$
    \left(
        f(\beta)=
        \int v^2 e^{-\frac{\beta m}{2}v^2 }\mathrm{d}v=
        \frac{1}{2}\sqrt{\frac{2^3\pi}{\beta^3 m^3}}、
        g(\beta)=
        \int e^{-\frac{\beta m}{2}v^2 }\mathrm{d}v=
        \sqrt{\frac{2\pi}{\beta m}}
    \right)
$$
$$
    PV=Nk_{\mathrm{B}}T
$$

ボルツマン定数の値