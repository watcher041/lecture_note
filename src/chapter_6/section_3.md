
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
        ・T < T_{b}\ 
        (1/T-1/T_{b}>0)\ の場合 &
        \rightarrow　
        \mathrm{d}'Q>0\\
        ・T > T_{b}\ 
        (1/T-1/T_{b}<0)\ の場合 &
        \rightarrow　
        \mathrm{d}'Q<0
    \end{cases}
$$
というように互いに同符号になっていることから、以下の関係が成り立つことが分かる。
$$
    0\le\left(
        \frac{1}{T}-
        \frac{1}{T_{b}}
    \right)\mathrm{d}'Q
    \le\mathrm{d}S + \mathrm{d}S_{b}
$$
ここでBoltzmannの原理よりエントロピーを状態数で置き換えると
$$
    \mathrm{d}S + \mathrm{d}S_{b}=
    \mathrm{d}
    (k_{\mathrm{B}}\ln\Omega)+
    \mathrm{d}
    (k_{\mathrm{B}}\ln\Omega_{b})=
    \mathrm{d}
     (k_{\mathrm{B}}
     \ln\Omega\Omega_{b})
$$
となり、一つのエントロピー $S_{\mathrm{x}}$ としてこれが増大し続けることが分かる。
$$
    S_\mathrm{x}=
    k_{\mathrm{B}}
    \ln\Omega\Omega_{b}
    \rightarrow
    0\le\mathrm{d}S_\mathrm{x}
$$
ここで $S_{\mathrm{x}}(\Omega_{\mathrm{x}})$ は熱浴系も容器系も孤立系の場合だと、互いに独立していることから全体の状態数になるものと思われる。
$$
    \Omega_t(U_t)=
    \Omega_\mathrm{x}(U_t)=
    \Omega(U)
    \Omega_{b}(U_b)
$$
しかし、今の場合だと各々でエネルギーが様々な値をとることから、全体のエネルギーが一定の条件の下で以下のような総和をとった形になる。
$$
    \Omega_t(U_t)=
    \sum_{U}
    \Omega(U)
    \Omega_{b}(Ut-U)
$$
ここで、左辺で右辺を割るとあたかも確率のようになることが分かる。
$$
    1=\sum_{U}P(U)、
    P(U)=
    \frac{\Omega(U)
    \Omega_{b}(Ut-U)}
    {\Omega_t(U_t)}
$$
そして、右辺の $\Omega_b$ のエントロピーに関して
$$
    S_b(U_t-U)\simeq S_b(U_t)-
    \left(
        \frac{\partial S_b}{\partial U_b}    
    \right)_V U=
    S_b(U_t)-\frac{U}{T_b}
$$
であることから、状態数に関しては以下のように書ける。
$$
    \Omega_b(U_t-U)=
    \Omega_b(U_t)
    e^{-U/k_{\mathrm{B}}T_b}
$$
そのため、確率は次のようになる。
$$
    P(U)=
    \frac{\Omega_b(U_t)}
    {\Omega_t(U_t)}
    \Omega(U)
    e^{-U/k_{\mathrm{B}}T_b}
$$
ここで、この総和をとったときに
$$
    \frac{\Omega_b(U_t)}
    {\Omega_t(U_t)}=
    \frac{1}{Z}、
    Z=
    \sum_U
    \Omega(U)
    e^{-U/k_{\mathrm{B}}T_b}
$$
とすることで、以下のように置くこともできる（ここで温度は $T_b\simeq T$ とみなしている）。
$$
    P(U)=\frac{1}{Z}
    \Omega(U)
    e^{-U/k_{\mathrm{B}}T}
$$
これにより、エネルギーと圧力の期待値が以下のように分配関数から求められることが分かる。
$$
    \braket{U}=
    -\frac{\partial}{\partial\beta}
    \ln Z、
    \braket{P}=
    \left<
        -\frac{\partial U}
        {\partial V}
    \right>=
    \frac{1}{\beta}
    \frac{\partial}{\partial V}
    \ln Z
$$
一方で、分配関数の方についてはエネルギーが連続していることから
$$
    \int_0^\infty 
    P(U)\mathrm{d}U=
    \frac{1}{Z}
    \int_0^\infty
    \Omega(U)e^{-\beta U}
    \mathrm{d}U=1
$$
と積分の形で書けるため、整理すると以下のようになっていることが分かる。
$$
    Z=
    \int_0^\infty
    \Omega(U)
    e^{-\beta U}
    \mathrm{d}U
$$
ただ、少し考えるとこの分配関数にはエネルギーの次元がついてしまい、先ほどの分配関数との違いが生じてしまう。そこで、状態密度の定義を
$$
    \Omega(U)\equiv
    \frac{\partial \mathcal{W}}
    {\partial U}
$$
と置くことで、離散的のときも打ち消しあい、
積分の形にした場合でも上記で定義できることが分かる。そのため、先ほどの理想気体の場合だと
$$
    \Omega(U)=
    \frac{CV^N}{\Gamma(3N/2)}
    \left(
        \frac{2\pi}{m}
    \right)^{3N/2}
    U^{3N/2-1}、
    (C：定数)
$$
となり、分配関数や各期待値も以下の通りとなる。
$$
    Z=CV^N
    \left(
        \frac{2\pi}{m\beta}
    \right)^{3N/2}、
    \braket{U}=
    \frac{3}{2}Nk_{\mathrm{B}}T、
    \braket{P}=
    \frac{Nk_{\mathrm{B}}T}{V}
$$
一方で、分配関数は状態密度をエントロピーで置き換えることで
$$
    Z=\int_0^{\infty}
    e^{-\beta F}、
    F=U-TS
$$
と書くことができるため、$e^{-\beta F}$ を足しわせたものであると考えることができる。