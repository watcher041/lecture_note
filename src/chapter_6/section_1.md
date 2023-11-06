
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

　二体の衝突においては、角運動量保存とエネルギー保存により以下の関係式が成り立つ。
$$
    L=\mu r^2
    \left(
        \frac{\mathrm{d}\theta}{\mathrm{d}t}
    \right)、
    E=
    \frac{1}{2}\mu
    \left(
        \frac{\mathrm{d}r}{\mathrm{d}t}
    \right)^2+
    \frac{1}{2}\mu r^2
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
となる（分子同士が近づく場合は負の値になり、分子同士が離れる場合は正の値になる）。ここで最近接距離 $r_0$ では動径方向の長さが変化しないため以下のようになる。
$$
    \frac{\mathrm{d}r}{\mathrm{d}t}=0
    \rightarrow
    E=\frac{L^2}{2\mu r_0^2}+U(r_0)
$$
以上の二体間の衝突を繰り返して速度を変化させているため、


衝突によって速度の分布は各方向で等確率になる。→速度分布は各方向で同じ値になる。

　分子の速度は壁への衝突と分子同士の衝突により変化するものと考えられる。前者のほうは向きが反対向きになるだけであるため、後者の方がどうなるか見ていくことにする。




 <!-- 例として、一つ目の分子1にもう一つの分子2が衝突する状況を考えると、各運動方程式は $\bm{r}=\bm{r}_2-\bm{r}_1、r=|\bm{r}_2-\bm{r}_1|$ として
$$
    m_1
    \frac{\mathrm{d}^2\bm{r}_1}{\mathrm{d}t^2}=
    \frac{\partial U(r)}{\partial r}
    \left(
    \frac{\bm{r}}{r}
    \right)、
    m_2
    \frac{\mathrm{d}^2\bm{r}_2}{\mathrm{d}t^2}=
    -\frac{\partial U(r)}{\partial r}
    \left(
    \frac{\bm{r}}{r}
    \right)
$$
であるが、これを変形して 
$$
    \frac{\mathrm{d}^2\bm{r}_1}{\mathrm{d}t^2}=
    \frac{1}{m_1}
    \frac{\partial U(r)}{\partial r}
    \left(
    \frac{\bm{r}}{r}
    \right)、
    \frac{\mathrm{d}^2\bm{r}_2}{\mathrm{d}t^2}=
    -\frac{1}{m_2}
    \frac{\partial U(r)}{\partial r}
    \left(
    \frac{\bm{r}}{r}
    \right)
$$
として両辺の差をとると
$$
    \mu\frac{\mathrm{d}^2\bm{r}}{\mathrm{d}t^2}=
    -\frac{\partial U(r)}{\partial r}
    \left(
    \frac{\bm{r}}{r}
    \right)、
    \left(
        \mu=\frac{m_1m_2}{m_1+m_2}
    \right)
$$
となる。これは動径方向と角度方向に分けることができ、
$$
    \bm{r}=r\bm{e}_r、
    \frac{\mathrm{d}\bm{r}}{\mathrm{d}t}=
    \frac{\mathrm{d}r}{\mathrm{d}t}
    \bm{e}_r+
    r\frac{\mathrm{d}\theta}{\mathrm{d}t}
    \bm{e}_\theta、
    \frac{\mathrm{d}^2\bm{r}}{\mathrm{d}t^2}=
    \left[
    \frac{\mathrm{d}^2r}{\mathrm{d}t^2}-
    r
    \left(
    \frac{\mathrm{d}\theta}{\mathrm{d}t}
    \right)^2
    \right]
    \bm{e}_r+
    \left[
    r
    \frac{\mathrm{d}^2\theta}{\mathrm{d}t^2}+
    2
    \frac{\mathrm{d}r}{\mathrm{d}t}
    \frac{\mathrm{d}\theta}{\mathrm{d}t}
    \right]
    \bm{e}_\theta
$$
であるから以下の通りとなる。
$$
    \mu
    \left[
    \frac{\mathrm{d}^2r}{\mathrm{d}t^2}-
    r
    \left(
    \frac{\mathrm{d}\theta}{\mathrm{d}t}
    \right)^2
    \right]=
    -\frac{\partial U(r)}{\partial r}、
    \mu
    \left[
    r
    \frac{\mathrm{d}^2\theta}{\mathrm{d}t^2}+
    2
    \frac{\mathrm{d}r}{\mathrm{d}t}
    \frac{\mathrm{d}\theta}{\mathrm{d}t}
    \right]=0
$$
2番目の式に $r$ をかけて整理することで、角運動量の保存則および動径方向の運動方程式が得られる。
$$
    L=\mu r^2
    \frac{\mathrm{d}\theta}{\mathrm{d}t}、
    \mu\frac{\mathrm{d}^2r}{\mathrm{d}t^2}-
    \frac{L^2}{\mu r^3}=
    -\frac{\partial U(r)}{\partial r}
$$
ここで、右辺を偏微分の形に
$$
    \mu
    \frac{\mathrm{d}^2r}{\mathrm{d}t^2}
    =
    \frac{L^2}{\mu r^3}
    -\frac{\partial U}{\partial r}
$$
としてから無限大の彼方から $r$ で積分すると  -->