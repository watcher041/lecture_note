
## 見かけの力（慣性力）

前回までは極座標を扱ってきたが、今度は一般的な回転座標だとどうなるかを見ていくことにする。まず原点を軸に座標系 $({x'},{y'})$ を角度 $\alpha$ だけ回転させて座標系 $({x'}',{y'}')$ に変換したものとすると

<p align="center">
    <img width="50%" src="images/2d_r_rotate.png">
</p>

$$
    {x'}'={x'}\cos\alpha+{y'}\sin\alpha、
    {y'}'=-{x'}\sin\alpha+{y'}\cos\alpha
$$

という変換式が成り立つ。そのため、逆変換を求めると

$$
    {x'}={x'}'\cos\alpha-{y'}'\sin\alpha、
    {y'}={x'}'\sin\alpha+{y'}'\cos\alpha
$$

であるから、速度を求めると以下の通りとなる。ここで、$\omega_\alpha=\dot{\alpha}$ と置いている。

$$
    v_{x'}=
    v_{x'}\cos\alpha-v_{y'}\sin\alpha-
    {x'}\omega_\alpha\sin\alpha-{y'}\omega_\alpha\cos\alpha=
    (v_{x'}-{y'}\omega_\alpha)\cos\alpha-
    (v_{y'}+{x'}\omega_\alpha)\sin\alpha
$$
$$
    v_{y'}=
    v_{x'}\sin\alpha+v_{y'}\cos\alpha+
    {x'}\omega_\alpha\cos\alpha-
    {y'}\omega_\alpha\sin\alpha=
    (v_{x'}-{y'}\omega_\alpha)\sin\alpha+
    (v_{y'}+{x'}\omega_\alpha)\cos\alpha
$$

極座標のときと違い、各成分に $\omega_\alpha$ に応じた成分が表れる。この項目は座標が回転したことで、物体が回転したように見えたことで出てきている。実際、止まっている質点を座標と同じ立場にたってみると以下のように反回転しているように見える。
