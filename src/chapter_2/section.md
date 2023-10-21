
エントロピーを次のように定義する。
$$
    {\rm d}S\equiv\frac{{\rm d'}Q}{T}
$$

温度が異なるAとBの系（$T_{\rm A}>T_{\rm B}$）を接触させた場合

$$
    {\rm d}S_{\rm A}\equiv\frac{{\rm d'}Q_{\rm A}}{T_{\rm A}}
$$

$$
    {\rm d}S_{\rm B}\equiv\frac{{\rm d'}Q_{\rm B}}{T_{\rm B}}
$$

となるが、ここで温度が熱の変化によって変化するため例えばAの場合だと

$$
    \frac{{\rm d'}Q_{\rm A}}{T_{\rm A}}=
    \frac{{\rm d'}Q_{\rm A}}{T_{\rm A（一定）}}
$$
ではなく、${\rm d'}Q_{\rm A}<0、T_{\rm A（一定）}\geq T_{\rm A}$であるため
$$
    \frac{{\rm d'}Q_{\rm A}}{T_{\rm A（一定）}}\geq
    \frac{{\rm d'}Q_{\rm A}}{T_{\rm A}}
$$
となり、以下の不等式が成り立つことが分かる。
$$
    {\rm d}S_{\rm A}\geq\frac{{\rm d'}Q_{\rm A}}{T_{\rm A}}
$$
Bについても同様な議論を行うことで、${\rm d'}Q_{\rm B}>0、T_{\rm B}\leqq T_{\rm A}$であることをふまえて
$$
    {\rm d}S_{\rm B}\geq\frac{{\rm d'}Q_{\rm B}}{T_{\rm B}}
$$
になる。エントロピー全体としても示量量であるため、${\rm d'}Q>0、{\rm d'}Q_{\rm B}={\rm d'}Q、{\rm d'}Q_{\rm A}=-{\rm d'}Q$
$$
    {\rm d}S={\rm d}S_{\rm A}+{\rm d}S_{\rm B}=
    \left(\frac{1}{T_{\rm B}}-\frac{1}{T_{\rm A}}\right){\rm d'}Q\geq 0
$$
これから孤立系では熱平衡出ない状態であればエントロピーが増大し続け、熱平衡になればエントロピーがある値をとるようになる。この値はBoltzmannの原理により
$$
    S=k_{\rm B}\ln \mathcal{W}
$$
で求めることができる。


stefan-boltzmannの法則もここで説明して