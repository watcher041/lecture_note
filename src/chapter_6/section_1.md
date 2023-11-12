
## 気体分子運動論

　分子が運動するものとした場合、まず壁に衝突による力（圧力）を及ぼすことが考えられる。そのため容器の壁に及ぼす圧力を考えると、圧力 $P$ は壁の単位面積が受ける力（撃力）の垂直成分の時間平均として定義される。そのため力の時間平均は分子の受ける力積の単位時間内総量に等しく、更にこれは運動量の変化の単位時間内総量に等しい。速さ $v$ の分子が壁に衝突して、**弾性的に反発されるとすれば**分子の運動量変化は壁に垂直に $2mv_{\perp}$ となる。そのため、単位時間当たりの力は以下のようになる。
$$
    \bar{F}=\frac{2mv_{\perp}}{\Delta t}
$$
ただ、実際は一つの分子による力のみがかかるわけではなく、複数の分子 $\Delta N$ による力が働くため、数密度 $n$ とすると面積 $\Delta S$ にかかる力は以下の通りとなる。
$$
    \bar{F}_{\mathrm{total}}=
    \overline{F}\Delta N=
    \overline{F}
    \left(
        nv_{\perp}\frac{1}{2}\Delta t
        \Delta S
    \right)
$$
そのため、圧力は次のようになると考えられる。
$$
    P(v_{\perp})=
    \frac{\overline{F}_{\mathrm{total}}}{\Delta S}=
    mv_{\perp}^2n
$$
しかし、これはあくまである速度 $v_{\perp}$ 
での圧力であり、様々な速度による圧力によるものではない。そのため、全体的に観測される圧力は速度の平均をとったものになると予想される。
$$
    P=\braket{P(v_{\perp})}=
    mn\braket{v_{\perp}^2}
$$
ここで $\braket{v_{\perp}^2}$ がどのくらいの値になるかは式を変形することで求めることができる（全質量 $M$ ）。
$$
    P=\frac{mN\braket{v_{\perp}^2}}{V}=
    \frac{M\braket{v_{\perp}^2}}{V}
    \rightarrow
    \braket{v_{\perp}^2}=\frac{PV}{M}
$$
例として、標準状態（0℃、1気圧）における1モルの気体を考えると、
$$
    P=1.013\times 10^5\ \mathrm{N/m^2}、
    V=0.0224\ \mathrm{m^3}
$$
であるため、各分子ごとに以下のようになる。

|分子名|$M$（kg）|$\braket{v_{\perp}^2}$|
|-|-|-|
|H$_2$|0.0020|1134560|
|He   |0.0040|567280|
|N$_2$|0.0280|81040|
|O$_2$|0.0320|70910|

そのため、分子の平均速度はおおよそ $100～300\ \mathrm{m/s}$ となるわけだが、実際の気体の拡散速度（1 m/s程度以下）と比べるとずっと遅いため矛盾があるように感じる。これは衝突を繰り返すことで**平均自由行路**が短くなり、全体的な速度が遅くなるということによるものと考えられる。そのため、衝突に関して考察していくことにする。

　まず簡単に二体の衝突を場合を考えてみる。このときの自由工程 $l$ は互いに近づいていき次に衝突するまでの間の距離として
$$
    l=\int_{0}^{\alpha}
    r\ \mathrm{d}\theta、
    \left(
        \alpha=\pi-\theta
    \right)
$$
であると予想される（$x$軸の左側からやってくるように軸を設定）。次に角運動量保存とエネルギー保存により以下の関係式が成り立つ。
$$
    L=\mu r^2
    \left(
        \frac{\mathrm{d}\theta}{\mathrm{d}t}
    \right)、
    E=
    \frac{1}{2}\mu \left(
        \frac{\mathrm{d}r}{\mathrm{d}t}
    \right)^2+
    \frac{1}{2}\mu
    r^2
    \left(
        \frac{\mathrm{d}\theta}{\mathrm{d}t}
    \right)^2+U(r)
$$
ここで一つ目の式を二つ目の式を代入すると
$$
    \frac{\mathrm{d}r}{\mathrm{d}t}=
    \pm
    \sqrt{
    \frac{2}{\mu}
    \left(
        E-\frac{L^2}{2\mu r^2}-U(r)
    \right)
    }
$$
となる（分子同士が近づく場合は負の値になり、分子同士が離れる場合は正の値になる）。ここで、$u=1/r$ として整理すると、
$$
    \frac{\mathrm{d}r}{\mathrm{d}t}=
    -\frac{L}{\mu}
    \frac{\mathrm{d}u}{\mathrm{d}\theta}=
    \frac{L}{\mu r^2}
    \frac{\mathrm{d}r}{\mathrm{d}\theta}
$$
であるため、先ほどの式は以下のように置き換えられる（互いに近づいていることから動径に応じて負になる）。
$$
    \frac{\mathrm{d}r}{\mathrm{d}\theta}=
    -
    \sqrt{
    \frac{2\mu r^4}{L^2}
    \left(
        E-\frac{L^2}{2\mu r^2}-U(r)
    \right)
    }=f(r)
$$
ここで変形して積分する形にすると
$$
    l=
    \int_{0}^{\alpha}
    \frac{r}{f(r)}
    \frac{\mathrm{d}r}{\mathrm{d}\theta}
    \mathrm{d}\theta=
    \int_{\infty}^{r_0}
    \frac{r}{f(r)}
    \mathrm{d}r=
    \int_{0}^{\alpha}r
    \mathrm{d}\theta
$$
であることから、$r$ の積分を解くことで自由工程を得られることが分かる。仮に、$U(u)=Cu^4$ という形になっているとすると

