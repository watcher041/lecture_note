
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
    \rightarrow
    0\le\mathrm{d}S + \mathrm{d}S_{b}
$$
ここでBoltzmannの原理よりエントロピーを状態数で置き換えると
$$
    \mathrm{d}S + \mathrm{d}S_{b}=
    \mathrm{d}
    (k_{\mathrm{B}}\ln\mathcal{W})+
    \mathrm{d}
    (k_{\mathrm{B}}\ln\mathcal{W}_{b})=
    \mathrm{d}
     (k_{\mathrm{B}}
     \ln\mathcal{W}\mathcal{W}_{b})
$$
となり、一つのエントロピーとしてみなすことができる。
$$
    S_\mathrm{x}=
    k_{\mathrm{B}}
    \ln\mathcal{W}_\mathrm{x}、
    \mathcal{W}_\mathrm{x}=
    \mathcal{W}\mathcal{W}_{b}
$$
もし、熱浴系も容器系も孤立系の場合どちらもエネルギー（$U,U_b$）が一定になるため、この積で全体の状態数になると思われる。
$$
    \mathcal{W}_\mathrm{x}(U_t)=
    \mathcal{W}(U)
    \mathcal{W}_{b}(U_b)
$$
しかし、今の場合だと全体のエネルギーが一定の状態で様々な値をとることから
$$
    \mathcal{W}_t(U_t)=
    \sum_{U}
    \mathcal{W}(U)
    \mathcal{W}_{b}(Ut-U)
$$
ここで、左辺で右辺を割るとあたかも確率のようになることが分かる。
$$
    1=\sum_{U}P(U)、
    P(U)=
    \frac{\mathcal{W}(U)
    \mathcal{W}_{b}(Ut-U)}
    {\mathcal{W}_t(U_t)}
$$
そして、右辺の $\mathcal{W}_b$ のエントロピーに関して
$$
    S_b(U_t-U)\simeq S_b(U_t)-
    \left(
        \frac{\partial S_b}{\partial U_b}    
    \right)_V U=
    S_b(U_t)-\frac{U}{T_b}
$$
であることから、状態数に関しては以下のように書ける。
$$
    \mathcal{W}_b(U_t-U)=
    \mathcal{W}_b(U_t)
    e^{-U/k_{\mathrm{B}}T_b}
$$
そのため、先ほどの確率は次のようになる。
$$
    1=
    \sum_U
    \frac{\mathcal{W}_b(U_t)}
    {\mathcal{W}_t(U_t)}
    \mathcal{W}(U)
    e^{-U/k_{\mathrm{B}}T_b}
    \rightarrow
    \frac{\mathcal{W}_b(U_t)}
    {\mathcal{W}_t(U_t)}=
    \frac{1}{Z}、
    Z=
    \sum_U
    \mathcal{W}(U)
    e^{-U/k_{\mathrm{B}}T_b}
$$
となるため、以下のように置くこともできる（ここで温度を $T_b\simeq T$ とする）。
$$
    P(U)=\frac{1}{Z}
    \mathcal{W}(U)
    e^{-U/k_{\mathrm{B}}T}
$$
