
## 正準集団

　前回までは分子の集団が孤立している状態を考えていたが、実際のところ孤立系というのは現実にはなく最低でも外部と熱のやり取りをしていることが多い。そのため、以下の図ような系を考えてみる。

<p align="center">
    <img width="60%"
        src="images/hot_bath.png">
</p>

ここでの容器系の状態を見てみると、熱力学第一法則と第二法則により
$$
    \mathrm{d}U=
    \mathrm{d}'Q+\mathrm{d}'W=
    \mathrm{d}'Q、
    \frac{\mathrm{d}'Q}{T} 
    \le \mathrm{d}S
$$
となるため、先ほどと異なりエネルギーが一定とならないため状態数を求めることができない。一方で、熱浴系においても
$$
    \mathrm{d}U_{b}=
    \mathrm{d}'Q_{b}+\mathrm{d}'W_{b}=
    \mathrm{d}'Q_{b}、
    \frac{\mathrm{d}'Q_{b}}{T_{b}} 
    \le \mathrm{d}S_{b}
$$
となるわけだが、全体としては孤立系であることを踏まえると、全体の内部エネルギーが保存しており尚且つ熱浴系と容器系の間でしか熱のやりとりしないことになる。
$$
    \mathrm{d}U_{t}=
    \mathrm{d}U_{b}+\mathrm{d}U=0、
    \mathrm{d}'Q_{b}=-\mathrm{d}'Q
$$
ここで熱力学第二法則の二式の和をとるとエントロピーに関して
$$
    \frac{\mathrm{d}'Q}{T}+
    \frac{\mathrm{d}'Q_{b}}{T_{b}} =
    \left(
        \frac{1}{T}-
        \frac{1}{T_{b}}
    \right)\mathrm{d}'Q \le
    \mathrm{d}S + \mathrm{d}S_{b}
$$
となるわけだが、ここで熱と温度の関係を見てみると
$$
    \begin{cases}
        ・\mathrm{d}'Q>0の場合 &
        \rightarrow　T < T_{b}\ 
        (1/T-1/T_{b}>0)\\
        ・\mathrm{d}'Q<0の場合 &
        \rightarrow　T > T_{b}\ 
        (1/T-1/T_{b}<0)
    \end{cases}
$$
というように互いに同符号になっていることから、以下の関係が成り立つことが分かる。
$$
    0\le\left(
        \frac{1}{T}-
        \frac{1}{T_{b}}
    \right)\mathrm{d}'Q
    \rightarrow
    0\le\mathrm{d}S + \mathrm{d}S_{b}
$$

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