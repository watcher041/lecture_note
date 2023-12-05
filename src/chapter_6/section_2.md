
## 統計集団

　気体の性質を調べる際には、よくピストンなどの容器に気体を閉じ込めておくことが多いが、このときに閉じ込められた気体（分子の集まり）は一種の集団を形成している。この集団を**統計集団**と呼ぶ。例えば、この気体が外部との熱のやり取り、漏れ出しなどもなく完全に孤立している集団（**小正準集団**）だとすると、熱力学第1法則
$$
    \mathrm{d}U=
    \mathrm{d}'Q+\mathrm{d}W
$$
は右辺が0となるため、内部エネルギーが保存されることが分かる。さらに内部で熱平衡になっている場合にはエントロピーの増大もしなくなるため
$$
    \mathrm{d}'Q=T\mathrm{d}S=0
$$
であり、なおかつ容器に閉じ込められている関係で仕事も
$$
    \mathrm{d}'W=-P\mathrm{d}V=0
$$
と体積が変化しない関係で一定になる。体積については気体の性質とは直接関係がない（人的に変更されるもの）が、エントロピーについてはBoltzmannによると気体のとりうる状態の数 $\mathcal{W}$ により
$$
    S=k_{\mathrm{B}}\ln\mathcal{W}
$$
というような関係がある（ボルツマンの原理）。この状態の数というのは全体の状態がエネルギーを用いて書けることから計算することができる。具体的には、エネルギーが
$$
    U=\sum_{i=1}^{N}
    \frac{1}{2}m\bm{v}_{i}^2、
    （U：一定）
$$
であることから以下のように整理すると球の方程式のようになっていることが分かる。
$$
    v_1^2+\cdots+v_{3N}^2=
    \frac{2U}{m}
$$
この体積というのは公式で存在しており、$f$ 次元の球の場合は
$$
    V_f=
    \frac{\pi^{f/2}}{\Gamma(f/2+1)}r^f
$$
であるから、以下のようになる。
$$
    V(U)=\frac{1}{\Gamma(3N/2+1)}
    \left(
        \frac{2\pi U}{m}
    \right)^{3N/2}
$$
エネルギーが一定の際に取りうる速度のパターン数はこの表面積になるため
$$
    S(U)=
    \left(
    \frac{\mathrm{d}V}{\mathrm{d}r}
    \right)=
    \frac{3N\pi}{2\Gamma(3N/2+1)}
    \left(
        \frac{2\pi U}{m}
    \right)^{3N/2-1}
$$
と微分することで求められる。しかし、このままだと次元が無次元とならないため、次元調整用に$A$ をかけたものが状態数となる。

$$
    \mathcal{W}=
    \frac{3N\pi A}{2\Gamma(3N/2+1)}
    \left(
        \frac{2\pi U}{m}
    \right)^{3N/2-1}
$$
一方で、熱力学第1法則をエントロピーとエネルギーを含む式に展開すると
$$
    \mathrm{d}S=
    \frac{1}{T}\mathrm{d}U+
    \frac{P}{T}\mathrm{d}V
$$
であるため、以下の関係式が成り立つことが分かる。
$$
    \left(
        \frac{\partial S}{\partial U}
    \right)_{V}=
    \frac{1}{T}、
    \left(
        \frac{\partial S}{\partial V}
    \right)_{U}=
    \frac{P}{T}
$$
ここで、一つ目の式に先ほどの値を代入すると
$$
    \left(
        \frac{\partial S}{\partial U}
    \right)_{V}=
    \frac{1}{T}
    \rightarrow
    U\simeq
    \frac{3}{2}Nk_{\mathrm{B}}T
$$
というようにエネルギーが求められる。これは元のエネルギーの式と比べると
$$
    \sum_{i=1}^{3N}\frac{1}{2}mv_{i}^2=
    \frac{3}{2}Nk_{\mathrm{B}}T
    \rightarrow
    \frac{1}{3N}
    \left(
    \sum_{i=1}^{3N}\frac{1}{2}mv_{i}^2
    \right)=
    \frac{1}{2}k_{\mathrm{B}}T
$$
というように、一成分当たりの平均エネルギーになっていることが分かる。そこで、
$$
    \braket{v^2}=
    \frac{1}{3N}
    \sum_{i=1}^{3N}v_{i}^2=
    \frac{k_{\mathrm{B}}T}{m}
$$
というようにすると、先ほどの関係式と成り立つため以下の通りとなる。
$$
    PV=M\braket{v_{\perp}^2}
    \rightarrow
    PV=Nk_\mathrm{B}T
$$
この関係を用いると、先ほどの圧力に関する式により $A$ から $V$ を抜き出すことができる。
$$
    \left(
        \frac{\partial S}{\partial V}
    \right)_{U}=
    \frac{P}{T}
    \rightarrow
    \frac{\partial}{\partial V}
    \ln A=\frac{N}{V}
    \rightarrow
    A=CV^{N}、
    (C:定数)
$$
さらに、$n$ モルでの理想気体の状態方程式は
$$
    PV=nRT
$$
であることを踏まえると、次のような関係があることが導ける。
$$
    R=N_{\mathrm{A}}k_{\mathrm{B}}、
    N_{\mathrm{A}}=\frac{N}{n}
$$
ここでの $N_{\mathrm{A}}$ は1molでの分子数を表しており**アボガドロ数**と呼ばれている。そして、この関係式から定積モル比熱（1molあたりの比熱）を求めてみると次のようになる。
$$
    C_V=
    \left(
    \frac{\partial U}{\partial T}
    \right)_{V}=\frac{3}{2}R
$$

この値と実験値を比較してみると以下の表の通りになる。

|分子名|$C_V$（実験値）|$3/2R$|
|-|-|-|
|He（気体）|$12.60\ \mathrm{J/K\cdot mol}\ (291℃)\\ 12.33\ \mathrm{J/K\cdot mol}\ (93℃)$|$12.47\ \mathrm{J/K\cdot mol}$|
|A（気体）|$12.86\ \mathrm{J/K\cdot mol}\ (288℃)\\ 12.00\ \mathrm{J/K\cdot mol}\ (93℃)$|$12.47\ \mathrm{J/K\cdot mol}$|

単原子分子の場合だと近い値をとっていることが見て取れるが、二原子分子などになると当てはまらなくなる。これは、単原子分子のときと**自由度**が異なるためで、例えば二原子分子の場合だと $5N$ だけある（チアバトンのように棒の両端に原子があるイメージ）。 


|分子名|$C_V$（実験値）|$5/2R$|
|-|-|-|
|N$_2$（気体）|$20.83\ \mathrm{J/K\cdot mol}\ (293℃)\\ 19.78\ \mathrm{J/K\cdot mol}\ (92℃)$|$20.78\ \mathrm{J/K\cdot mol}$|$12.47\ \mathrm{J/K\cdot mol}$|
|O$_2$（気体）|$20.84\ \mathrm{J/K\cdot mol}\ (293℃)\\ 18.43\ \mathrm{J/K\cdot mol}\ (92℃)$|$20.78\ \mathrm{J/K\cdot mol}$|$12.47\ \mathrm{J/K\cdot mol}$|

同様に、固体についても調和振動子と考えると自由度が $6N$ だけあり、なおかつDulong-Putiの法則においても $3R$ になることは確かめられている。

|分子名|$C_V$（実験値）|$3R$|
|-|-|-|
|Al（固体）|$24.37\ \mathrm{J/K\cdot mol}\ (15～100℃間の平均)$|$24.94\ \mathrm{J/K\cdot mol}$|
|Pb（固体）|$22.70\ \mathrm{J/K\cdot mol}\ (15～100℃間の平均)$|$24.94\ \mathrm{J/K\cdot mol}$|




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